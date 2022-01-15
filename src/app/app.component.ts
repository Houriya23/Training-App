import { Component } from '@angular/core';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app';
  session_name= 'Formation NodeJS';
  firstSession= {
    id: 1,
    name: 'Formation Web',
    track: 'MEAN Stack',
    date: new Date('2021-11-20'),
    duree: 3,
    local: 'Tunis',
    participants: 0
  }
}
