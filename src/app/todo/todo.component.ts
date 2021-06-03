import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() todo;

  get runChangeDetection() {
    console.log('TodoComponent - Checking the view');
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
