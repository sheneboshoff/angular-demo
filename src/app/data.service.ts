import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = [
    'Ford', 'Chevrolet', 'Toyota'
  ];

  myData() {
    return 'This is my data';
  }
}
