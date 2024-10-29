import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CarAccessory-card.component.html',
  styleUrls: ['./CarAccessory-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CarAccessory-card]': 'true'
  }
})

export class CarAccessoryCardComponent {


}