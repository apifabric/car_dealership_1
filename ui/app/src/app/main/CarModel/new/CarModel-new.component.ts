import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CarModel-new',
  templateUrl: './CarModel-new.component.html',
  styleUrls: ['./CarModel-new.component.scss']
})
export class CarModelNewComponent {
  @ViewChild("CarModelForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}