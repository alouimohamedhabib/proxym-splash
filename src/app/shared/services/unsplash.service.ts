import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';
import { apiConfiguration } from '../../config/api-config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class UnsplashService {
  headeroptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': apiConfiguration['unsplash'].accesskey
    })
  }
  constructor(private req: HttpClient) { }

  getData(keyword: String, page?: Number) {
    console.log(keyword);

    return this.req.get(apiConfiguration['unsplash'].accessUrl + `?page=${page}&query=${keyword}`, this.headeroptions);
  }

}
