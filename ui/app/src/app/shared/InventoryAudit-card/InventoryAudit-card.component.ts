import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './InventoryAudit-card.component.html',
  styleUrls: ['./InventoryAudit-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.InventoryAudit-card]': 'true'
  }
})

export class InventoryAuditCardComponent {


}