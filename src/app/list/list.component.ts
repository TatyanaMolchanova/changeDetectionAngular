import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

interface Item {
  title: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  // @Input() items: Observable<any[]>;
  @Input() items: Observable<Item[]>;
  // _items: any[];
  _items: Item[];

  ngOnInit() {
    this.items.subscribe(items => {
      this._items = items;
    });
  }
}
