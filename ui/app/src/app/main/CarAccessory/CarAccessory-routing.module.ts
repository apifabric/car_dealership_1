import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAccessoryHomeComponent } from './home/CarAccessory-home.component';
import { CarAccessoryNewComponent } from './new/CarAccessory-new.component';
import { CarAccessoryDetailComponent } from './detail/CarAccessory-detail.component';

const routes: Routes = [
  {path: '', component: CarAccessoryHomeComponent},
  { path: 'new', component: CarAccessoryNewComponent },
  { path: ':id', component: CarAccessoryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CarAccessory-detail-permissions'
      }
    }
  }
];

export const CARACCESSORY_MODULE_DECLARATIONS = [
    CarAccessoryHomeComponent,
    CarAccessoryNewComponent,
    CarAccessoryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarAccessoryRoutingModule { }