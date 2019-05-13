import { Component, OnChanges, OnInit } from '@angular/core';
import { NgStoreonService } from 'ng-storeon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  changes: any;
  dispath: any;
  constructor(private ngstoreon: NgStoreonService) { }
  title = 'sroreon-angular-ivy';

  ngOnInit() {
    const { dispatch, changes } = this.ngstoreon.useStoreon('count');
    this.dispath = dispatch;
    this.changes = changes;
  }

  updateState() {
    this.dispath('inc');
  }
}
