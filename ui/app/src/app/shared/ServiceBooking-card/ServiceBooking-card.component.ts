import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceBooking-card.component.html',
  styleUrls: ['./ServiceBooking-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceBooking-card]': 'true'
  }
})

export class ServiceBookingCardComponent {


}