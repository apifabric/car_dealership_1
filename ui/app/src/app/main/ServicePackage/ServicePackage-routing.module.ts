import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePackageHomeComponent } from './home/ServicePackage-home.component';
import { ServicePackageNewComponent } from './new/ServicePackage-new.component';
import { ServicePackageDetailComponent } from './detail/ServicePackage-detail.component';

const routes: Routes = [
  {path: '', component: ServicePackageHomeComponent},
  { path: 'new', component: ServicePackageNewComponent },
  { path: ':id', component: ServicePackageDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServicePackage-detail-permissions'
      }
    }
  },{
    path: ':service_package_id/ServiceBooking', loadChildren: () => import('../ServiceBooking/ServiceBooking.module').then(m => m.ServiceBookingModule),
    data: {
        oPermission: {
            permissionId: 'ServiceBooking-detail-permissions'
        }
    }
}
];

export const SERVICEPACKAGE_MODULE_DECLARATIONS = [
    ServicePackageHomeComponent,
    ServicePackageNewComponent,
    ServicePackageDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicePackageRoutingModule { }