import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INVENTORYAUDIT_MODULE_DECLARATIONS, InventoryAuditRoutingModule} from  './InventoryAudit-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InventoryAuditRoutingModule
  ],
  declarations: INVENTORYAUDIT_MODULE_DECLARATIONS,
  exports: INVENTORYAUDIT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InventoryAuditModule { }