import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoryHomeComponent } from './home/Accessory-home.component';
import { AccessoryNewComponent } from './new/Accessory-new.component';
import { AccessoryDetailComponent } from './detail/Accessory-detail.component';

const routes: Routes = [
  {path: '', component: AccessoryHomeComponent},
  { path: 'new', component: AccessoryNewComponent },
  { path: ':id', component: AccessoryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Accessory-detail-permissions'
      }
    }
  },{
    path: ':accessory_id/CarAccessory', loadChildren: () => import('../CarAccessory/CarAccessory.module').then(m => m.CarAccessoryModule),
    data: {
        oPermission: {
            permissionId: 'CarAccessory-detail-permissions'
        }
    }
}
];

export const ACCESSORY_MODULE_DECLARATIONS = [
    AccessoryHomeComponent,
    AccessoryNewComponent,
    AccessoryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessoryRoutingModule { }