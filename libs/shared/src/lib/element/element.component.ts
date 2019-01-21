import { Component, EventEmitter, Input, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootState } from '../state/root.reducer';
import { getHistory } from '../state/test/test.selector';
import { Fire } from '../state/test/test.action';

@Component({
  selector: 'eof-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  @Input() id: number;
  @Output() fire = new EventEmitter<number>();

  history$ = this.store.pipe(select(getHistory));

  constructor(private store: Store<RootState>) {}

  onClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();

    this.store.dispatch(new Fire(this.id));
  }
}


