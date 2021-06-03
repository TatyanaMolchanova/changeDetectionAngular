import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {

  @Input() todos;

  // get runChangeDetection() {
  //   console.log('TodosComponent - Checking the view');
  //   return true;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
