import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountComponent implements OnInit {
  count = null;


  constructor(http: HttpClient) {
    // setTimeout(() => this.count = 5, 0);

    // setInterval(() => this.count = 5, 100);
    //
    Promise.resolve().then(() => this.count = 5);

    http.get('https://count.com').subscribe(res => {
      this.count = res;
    });
  }

  ngOnInit(): void {
  }

  add() {
    this.count++;
  }

}
