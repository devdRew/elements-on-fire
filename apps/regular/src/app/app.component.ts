import { Component } from '@angular/core';

@Component({
  selector: 'eof-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onFire(value: number) {
    console.log(`Regular application caught event ${value}`);
  }
}
