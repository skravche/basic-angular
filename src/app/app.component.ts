import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic Title';
  titleTwo = 'two way binding';
  numb = 99.00100184956;
  obj = {a: 15, b: 0.2342, c: 'this is string'};
  imgOne = 'https://i.pinimg.com/236x/00/c8/36/00c836f5c3cff88ea0f24a8074866074.jpg';
  imgTwo = 'https://i.pinimg.com/236x/6f/a4/a1/6fa4a13b6ece5df91e764c33c409dccd.jpg';
  inChange: string;
//  title = 'angular-basic';

  constructor() {
    setTimeout((imgOne) => {
      this.imgOne = this.imgTwo;
    }, 1000);
  }

  onChange(event) {
    return this.inChange = event.target.value;
  }
  onBlur(str: string) {
    this.inChange = str;
  }
  // two way binding
  onInputTwo(event) {
    this.titleTwo = event.target.value;
  }
}
