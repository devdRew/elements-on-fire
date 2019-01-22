import { Component } from '@angular/core';
import { TalksService } from '../database/talks/talks.service';

@Component({
  selector: 'eof-tech-hangout-talk-list',
  templateUrl: './tech-hangout-talk-list.component.html',
  styleUrls: ['./tech-hangout-talk-list.component.scss']
})
export class TechHangoutTalkListComponent {

  get talks$() {
    return this.talks.all$;
  }

  constructor(private talks: TalksService) { }

}
