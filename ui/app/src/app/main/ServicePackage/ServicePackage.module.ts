import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICEPACKAGE_MODULE_DECLARATIONS, ServicePackageRoutingModule} from  './ServicePackage-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServicePackageRoutingModule
  ],
  declarations: SERVICEPACKAGE_MODULE_DECLARATIONS,
  exports: SERVICEPACKAGE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicePackageModule { }