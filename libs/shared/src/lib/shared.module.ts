import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateModule } from './state/state.module';
import { ElementComponent } from './element/element.component';

@NgModule({
  imports: [
    CommonModule,
    StateModule,
  ],
  declarations: [ElementComponent],
  exports: [ElementComponent],
})
export class SharedModule {}
