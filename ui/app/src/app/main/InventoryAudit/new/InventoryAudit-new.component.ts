import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'InventoryAudit-new',
  templateUrl: './InventoryAudit-new.component.html',
  styleUrls: ['./InventoryAudit-new.component.scss']
})
export class InventoryAuditNewComponent {
  @ViewChild("InventoryAuditForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}