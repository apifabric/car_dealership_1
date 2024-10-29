import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarModelHomeComponent } from './home/CarModel-home.component';
import { CarModelNewComponent } from './new/CarModel-new.component';
import { CarModelDetailComponent } from './detail/CarModel-detail.component';

const routes: Routes = [
  {path: '', component: CarModelHomeComponent},
  { path: 'new', component: CarModelNewComponent },
  { path: ':id', component: CarModelDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CarModel-detail-permissions'
      }
    }
  },{
    path: ':model_id/Car', loadChildren: () => import('../Car/Car.module').then(m => m.CarModule),
    data: {
        oPermission: {
            permissionId: 'Car-detail-permissions'
        }
    }
}
];

export const CARMODEL_MODULE_DECLARATIONS = [
    CarModelHomeComponent,
    CarModelNewComponent,
    CarModelDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarModelRoutingModule { }