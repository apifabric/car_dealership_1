import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryAuditHomeComponent } from './home/InventoryAudit-home.component';
import { InventoryAuditNewComponent } from './new/InventoryAudit-new.component';
import { InventoryAuditDetailComponent } from './detail/InventoryAudit-detail.component';

const routes: Routes = [
  {path: '', component: InventoryAuditHomeComponent},
  { path: 'new', component: InventoryAuditNewComponent },
  { path: ':id', component: InventoryAuditDetailComponent,
    data: {
      oPermission: {
        permissionId: 'InventoryAudit-detail-permissions'
      }
    }
  }
];

export const INVENTORYAUDIT_MODULE_DECLARATIONS = [
    InventoryAuditHomeComponent,
    InventoryAuditNewComponent,
    InventoryAuditDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryAuditRoutingModule { }