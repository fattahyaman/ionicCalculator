import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  value = '0';
  oldValue = '0';

  lastOperator = 'x';
  readyForNewInput = true;
  numberGroups = [
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, 'c', '/', '='],
  ];
  symBolCheck(symbol) {
    return typeof symbol;
  }
  onPress(symbol) {
    console.log(symbol);
    console.log(typeof symbol);
    console.log(this.symBolCheck(symbol));
    if (typeof symbol === 'number') {
      console.log('is a number');
      if (this.readyForNewInput) this.value = '' + symbol;
      else this.value += '' + symbol;
      this.readyForNewInput = false;
    } else if (symbol === 'c') {
      this.value = '0';
      this.readyForNewInput = true;
    } else if (symbol === '=') {
      if (this.lastOperator === 'x')
        this.value = '' + parseInt(this.oldValue) * parseInt(this.value);
      else if (this.lastOperator === '-')
        this.value = '' + (parseInt(this.oldValue) - parseInt(this.value));
      else if (this.lastOperator === '+')
        this.value = '' + (parseInt(this.oldValue) + parseInt(this.value));
      else if (this.lastOperator === '/')
        this.value = '' + parseInt(this.oldValue) / parseInt(this.value);
      this.readyForNewInput = true;
    } else {
      // operator
      this.readyForNewInput = true;
      this.oldValue = this.value;
      this.lastOperator = symbol;
    }
  }
}
