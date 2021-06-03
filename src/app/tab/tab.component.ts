import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {
  _content;

  @Input() set content(value) {
    this._content = value;
    this.cdr.markForCheck();
  }

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
  }

}
