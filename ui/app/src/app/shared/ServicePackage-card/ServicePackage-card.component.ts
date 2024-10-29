import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServicePackage-card.component.html',
  styleUrls: ['./ServicePackage-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServicePackage-card]': 'true'
  }
})

export class ServicePackageCardComponent {


}