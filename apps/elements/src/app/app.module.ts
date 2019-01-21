import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { SharedModule } from '@angular-elements-on-fire/shared';
import { ElementWrapperComponent } from './element-wrapper/element-wrapper.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, ElementWrapperComponent],
  imports: [BrowserModule, NxModule.forRoot(), SharedModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ElementWrapperComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const wrapper = createCustomElement(ElementWrapperComponent, { injector });
    customElements.define('eof-element-wrapper', wrapper);
  }
}
