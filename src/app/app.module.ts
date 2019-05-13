import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgStoreonModule } from 'ng-storeon';

import { AppComponent } from './app.component';


// special import for stackblitz
// import createStore from 'storeon';

// Use in your app:
import * as createStore from 'storeon';

let increment = store => {
  store.on('@init', () => ({ count: 0 }));
  store.on('inc', ({ count }) => ({ count: count + 1 }));
};
export const store = createStore([increment]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgStoreonModule
  ],
  providers: [
    {
      provide: 'STOREON',
      useValue: store
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
