import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { SharedModule } from '@angular-elements-on-fire/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
