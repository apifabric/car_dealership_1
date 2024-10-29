import { MenuRootItem } from 'ontimize-web-ngx';

import { AccessoryCardComponent } from './Accessory-card/Accessory-card.component';

import { CarCardComponent } from './Car-card/Car-card.component';

import { CarAccessoryCardComponent } from './CarAccessory-card/CarAccessory-card.component';

import { CarModelCardComponent } from './CarModel-card/CarModel-card.component';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { InventoryAuditCardComponent } from './InventoryAudit-card/InventoryAudit-card.component';

import { MaintenanceCardComponent } from './Maintenance-card/Maintenance-card.component';

import { SaleCardComponent } from './Sale-card/Sale-card.component';

import { SalespersonCardComponent } from './Salesperson-card/Salesperson-card.component';

import { ServiceBookingCardComponent } from './ServiceBooking-card/ServiceBooking-card.component';

import { ServicePackageCardComponent } from './ServicePackage-card/ServicePackage-card.component';

import { TestDriveCardComponent } from './TestDrive-card/TestDrive-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Accessory', name: 'ACCESSORY', icon: 'view_list', route: '/main/Accessory' }
    
        ,{ id: 'Car', name: 'CAR', icon: 'view_list', route: '/main/Car' }
    
        ,{ id: 'CarAccessory', name: 'CARACCESSORY', icon: 'view_list', route: '/main/CarAccessory' }
    
        ,{ id: 'CarModel', name: 'CARMODEL', icon: 'view_list', route: '/main/CarModel' }
    
        ,{ id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'InventoryAudit', name: 'INVENTORYAUDIT', icon: 'view_list', route: '/main/InventoryAudit' }
    
        ,{ id: 'Maintenance', name: 'MAINTENANCE', icon: 'view_list', route: '/main/Maintenance' }
    
        ,{ id: 'Sale', name: 'SALE', icon: 'view_list', route: '/main/Sale' }
    
        ,{ id: 'Salesperson', name: 'SALESPERSON', icon: 'view_list', route: '/main/Salesperson' }
    
        ,{ id: 'ServiceBooking', name: 'SERVICEBOOKING', icon: 'view_list', route: '/main/ServiceBooking' }
    
        ,{ id: 'ServicePackage', name: 'SERVICEPACKAGE', icon: 'view_list', route: '/main/ServicePackage' }
    
        ,{ id: 'TestDrive', name: 'TESTDRIVE', icon: 'view_list', route: '/main/TestDrive' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AccessoryCardComponent

    ,CarCardComponent

    ,CarAccessoryCardComponent

    ,CarModelCardComponent

    ,CustomerCardComponent

    ,InventoryAuditCardComponent

    ,MaintenanceCardComponent

    ,SaleCardComponent

    ,SalespersonCardComponent

    ,ServiceBookingCardComponent

    ,ServicePackageCardComponent

    ,TestDriveCardComponent

];