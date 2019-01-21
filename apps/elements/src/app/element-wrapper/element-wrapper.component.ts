import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementInput } from './element-input.interface';

@Component({
  selector: 'eof-element-wrapper',
  template: `<eof-element [id]="data.id" (fire)="fire.emit($event)"></eof-element>`,
  styles: [`:host { display: block; }`],
})
export class ElementWrapperComponent {
  @Input() set input(value: string) {
    try {
      this.data = JSON.parse(value) as ElementInput;
    } catch (e) {
      console.error(`${e.toString()} when processing ${value}`);
    }
  }

  @Output() fire = new EventEmitter<number>();

  data: ElementInput;
}
