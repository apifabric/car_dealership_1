import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CARACCESSORY_MODULE_DECLARATIONS, CarAccessoryRoutingModule} from  './CarAccessory-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CarAccessoryRoutingModule
  ],
  declarations: CARACCESSORY_MODULE_DECLARATIONS,
  exports: CARACCESSORY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarAccessoryModule { }