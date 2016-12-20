import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<h1 i18n="User welcome|An introduction header for this sample">Hello World</h1>
<!--i18n: Display the counter -->
Counter: {{counter}}<br>
<!--/i18n-->
<button (click)="counter = counter - 1">Less</button>
<button (click)="counter = counter + 1">More</button>

<br><br>

<!--i18n: Tell the user that i18n is easy -->
That's easy!
<!--/i18n-->

<br><br>

<ng-container i18n>More stuff</ng-container><br>
<!--<span i18n>{counter, plural, =0 {no wolves} =1 {one wolf} =2 {two wolves} other {a wolf pack}}</span><br>
<span i18n>The hero is {gender, select, m {male} f {female}}</span><br>-->
<img src="../angular.png" i18n-title="foo|bar" title="Angular 2 logo" /><br>
`,
})
export class App {
  counter: number = 0;
  gender: string = 'f';
}