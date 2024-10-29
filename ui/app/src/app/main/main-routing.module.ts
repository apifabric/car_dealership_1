import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Accessory', loadChildren: () => import('./Accessory/Accessory.module').then(m => m.AccessoryModule) },
    
        { path: 'Car', loadChildren: () => import('./Car/Car.module').then(m => m.CarModule) },
    
        { path: 'CarAccessory', loadChildren: () => import('./CarAccessory/CarAccessory.module').then(m => m.CarAccessoryModule) },
    
        { path: 'CarModel', loadChildren: () => import('./CarModel/CarModel.module').then(m => m.CarModelModule) },
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'InventoryAudit', loadChildren: () => import('./InventoryAudit/InventoryAudit.module').then(m => m.InventoryAuditModule) },
    
        { path: 'Maintenance', loadChildren: () => import('./Maintenance/Maintenance.module').then(m => m.MaintenanceModule) },
    
        { path: 'Sale', loadChildren: () => import('./Sale/Sale.module').then(m => m.SaleModule) },
    
        { path: 'Salesperson', loadChildren: () => import('./Salesperson/Salesperson.module').then(m => m.SalespersonModule) },
    
        { path: 'ServiceBooking', loadChildren: () => import('./ServiceBooking/ServiceBooking.module').then(m => m.ServiceBookingModule) },
    
        { path: 'ServicePackage', loadChildren: () => import('./ServicePackage/ServicePackage.module').then(m => m.ServicePackageModule) },
    
        { path: 'TestDrive', loadChildren: () => import('./TestDrive/TestDrive.module').then(m => m.TestDriveModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }