import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateModule } from './state/state.module';
import { ElementComponent } from './element/element.component';
import { TechHangoutTalkListComponent } from './tech-hangout-talk-list/tech-hangout-talk-list.component';

@NgModule({
  imports: [
    CommonModule,
    StateModule,
  ],
  declarations: [ElementComponent, TechHangoutTalkListComponent],
  exports: [ElementComponent, TechHangoutTalkListComponent],
})
export class SharedModule {

}
