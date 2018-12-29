import { TestBed, inject } from '@angular/core/testing';

import { CentralRequestServiceService } from './central-request-service.service';

describe('CentralRequestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentralRequestServiceService]
    });
  });

  it('should be created', inject([CentralRequestServiceService], (service: CentralRequestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
