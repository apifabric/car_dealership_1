import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ServicePackage-new',
  templateUrl: './ServicePackage-new.component.html',
  styleUrls: ['./ServicePackage-new.component.scss']
})
export class ServicePackageNewComponent {
  @ViewChild("ServicePackageForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}