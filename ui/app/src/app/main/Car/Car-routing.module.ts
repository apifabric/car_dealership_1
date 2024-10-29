import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarHomeComponent } from './home/Car-home.component';
import { CarNewComponent } from './new/Car-new.component';
import { CarDetailComponent } from './detail/Car-detail.component';

const routes: Routes = [
  {path: '', component: CarHomeComponent},
  { path: 'new', component: CarNewComponent },
  { path: ':id', component: CarDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Car-detail-permissions'
      }
    }
  },{
    path: ':car_id/CarAccessory', loadChildren: () => import('../CarAccessory/CarAccessory.module').then(m => m.CarAccessoryModule),
    data: {
        oPermission: {
            permissionId: 'CarAccessory-detail-permissions'
        }
    }
},{
    path: ':car_id/InventoryAudit', loadChildren: () => import('../InventoryAudit/InventoryAudit.module').then(m => m.InventoryAuditModule),
    data: {
        oPermission: {
            permissionId: 'InventoryAudit-detail-permissions'
        }
    }
},{
    path: ':car_id/Maintenance', loadChildren: () => import('../Maintenance/Maintenance.module').then(m => m.MaintenanceModule),
    data: {
        oPermission: {
            permissionId: 'Maintenance-detail-permissions'
        }
    }
},{
    path: ':car_id/Sale', loadChildren: () => import('../Sale/Sale.module').then(m => m.SaleModule),
    data: {
        oPermission: {
            permissionId: 'Sale-detail-permissions'
        }
    }
},{
    path: ':car_id/ServiceBooking', loadChildren: () => import('../ServiceBooking/ServiceBooking.module').then(m => m.ServiceBookingModule),
    data: {
        oPermission: {
            permissionId: 'ServiceBooking-detail-permissions'
        }
    }
},{
    path: ':car_id/TestDrive', loadChildren: () => import('../TestDrive/TestDrive.module').then(m => m.TestDriveModule),
    data: {
        oPermission: {
            permissionId: 'TestDrive-detail-permissions'
        }
    }
}
];

export const CAR_MODULE_DECLARATIONS = [
    CarHomeComponent,
    CarNewComponent,
    CarDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }