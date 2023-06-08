import { Injectable } from '@angular/core';
import { CommonService } from './common/common.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  common: CommonService;

  constructor( common: CommonService)  {
    this.common = common;
   }
}
