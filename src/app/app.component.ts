import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = [{ title: 'One' }, { title: 'Two' }];

  add() {
    this.todos = [...this.todos, { title: 'Three' }];
  }


  // items = [];
  // items$ = new BehaviorSubject(this.items);
  //
  // add() {
  //   this.items.push({ title: Math.random() })
  //   this.items$.next(this.items);
  // }


  // config = {
  //   position: 'top'
  // };
  // //
  // onClick() {
  //   this.config = {
  //     position: 'bottom'
  //   }
  // }

  // onClick() {
  //   this.config.position = 'bottom';
  // }



  // onClick() {}
}
