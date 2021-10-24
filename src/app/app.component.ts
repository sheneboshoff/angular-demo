import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `


  <p [@myAnimation]='state' (click)="animateMe()">I will animate</p>

  `,
  styles: [`

  p {
    width:200px;
    background:lightgrey;
    margin:100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }
  
  `],
  animations: [
    trigger('myAnimation', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in', style({
        transform: 'translateY(40px)'
      }))),
    ]),
  ]
})
export class AppComponent {

  constructor(private dataService:DataService) {
  }

  someProperty:string = '';

  
  state: string = 'small'

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}

/* <p>{{ myObject.location }}</p>     goes in the template

  <ul>
    <li *ngFor="let arr of myArr">{{ arr }}</li>
  </ul>

  <ul>
    <li *ngIf="myArr">Yeah, I exist</li>
  </ul>

  <ul>
    <li *ngIf="myArr2 == 'something'">Yeah, I exist</li>
  </ul>

  <div *ngIf="myArr3; then tmpl1 else tmpl2"></div>

  <ng-template #tmpl1>Truth</ng-template>
  <ng-template #tmpl2>False</ng-template>

  <img src="{{ angularLogo }}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">

  <button [disabled]="buttonStatus == 'enabled'">My Button</button>

  <button (click)="myEvent($event)">My Button</button>

    <button (mouseenter)="myEvent($event)">My Button</button>

    <h1 [ngClass]="titleClasses">Hello!</h1>

    <h1 [style.color]="titleStyle ? 'green' : 'pink'">Hello!</h1>

  <h1 [ngStyle]="titleStyles">Hello!</h1>

  <p>{{ someProperty }}</p>
 */

    //styles
    /* h1 {
    text-decoration:underline
  }

  .red-title {
    color:red;
  }
  .large-title {
    font-size: 4rem;
  } */

  //AppComponent
  /* angularLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png';
buttonStatus = 'enabled'; */

  /* myObject = {
    gender: 'female',
    age: 21,
    location: "South Africa"
  }

  myArr = ['him', 'hers', 'yours'];

  myArr2 = 'something';

  myArr3 = false; 
  
  myEvent(event: any) {
    console.log(event);

    titleClass = true;
  titleClasses = {
    'red-title': true,
    'large-title': true
  }
  }
  
  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }
  
  titleStyle = false;

  titleStyles = {
    'color' : 'red',
    'font-size' : '4rem'
  }

  */