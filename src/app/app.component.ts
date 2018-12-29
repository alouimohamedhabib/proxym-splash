import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { UnsplashService } from './shared/services/unsplash.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  serviceToCall: any;
  SearchForm: FormGroup;
  images: any;
  keyword: String;
  pagination: Array<any>;
  currentPage: any;
  constructor(private injector: Injector) { }

  ngOnInit() {
    let trendyServiceMap = {
      serviceA: UnsplashService
    }
    this.serviceToCall = this.injector.get<any>(trendyServiceMap.serviceA);
    this.SearchForm = new FormGroup({
      keyword: new FormControl(null, Validators.required),
      source: new FormControl(null, Validators.required)
    });
  }

  getResponse(page: Number = 1, event?): void {

    this.currentPage = page;
    this.serviceToCall.getData(this.keyword, page).subscribe(
      (response) => {
        this.images = response;
        let currentPage = page;
        let pagiator = [];
        if (response.total_pages >= page && response.total_pages !== 1)
          for (let i = this.currentPage - 5; i < this.currentPage + 5; i++) {
            if (i > 0 && i < response.total_pages + 1)
              pagiator.push(i)
          }
        this.pagination = pagiator;
      },
      (error) => {

      },
      complete => {
        console.log("Done")
      }
    )
  }
}
