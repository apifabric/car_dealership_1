import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceBookingHomeComponent } from './home/ServiceBooking-home.component';
import { ServiceBookingNewComponent } from './new/ServiceBooking-new.component';
import { ServiceBookingDetailComponent } from './detail/ServiceBooking-detail.component';

const routes: Routes = [
  {path: '', component: ServiceBookingHomeComponent},
  { path: 'new', component: ServiceBookingNewComponent },
  { path: ':id', component: ServiceBookingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceBooking-detail-permissions'
      }
    }
  }
];

export const SERVICEBOOKING_MODULE_DECLARATIONS = [
    ServiceBookingHomeComponent,
    ServiceBookingNewComponent,
    ServiceBookingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceBookingRoutingModule { }