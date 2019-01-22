import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { SharedModule } from '@angular-elements-on-fire/shared';
import { ElementWrapperComponent } from './element-wrapper/element-wrapper.component';
import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { TechHangoutTalkListComponent } from '../../../../libs/shared/src/lib/tech-hangout-talk-list/tech-hangout-talk-list.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent, ElementWrapperComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ElementWrapperComponent, TechHangoutTalkListComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const wrapper = createCustomElement(ElementWrapperComponent, { injector });
    customElements.define('eof-element-wrapper', wrapper);
    const talks = createCustomElement(TechHangoutTalkListComponent, { injector });
    customElements.define('eof-tech-hangout-talk-list', talks);
  }
}
