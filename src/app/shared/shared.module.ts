import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsplashService } from './services/unsplash.service';
import { PaginatorPipe } from './pipes/paginator.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UnsplashService
  ],
  declarations: [PaginatorPipe]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule, providers: [UnsplashService]
    }
  }
}
