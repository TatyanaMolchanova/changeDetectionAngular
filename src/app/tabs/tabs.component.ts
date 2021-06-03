import {AfterContentInit, Component, ContentChild, OnInit} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChild(TabComponent) tab: TabComponent;

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.tab.content = 'Content';
    }, 3000);
  }
}
