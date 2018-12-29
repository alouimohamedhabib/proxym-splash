import { Injectable, Injector } from '@angular/core';

@Injectable()
export class CentralRequestServiceService {
  /**
   * This class is responsable of loading a specific needed services requested by the user
   * 
   * @param injector 
   */
  constructor(private injector: Injector) { }

}
