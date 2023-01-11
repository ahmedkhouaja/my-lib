import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-btn',
  template: `
    <p>
      <button style="color: red;">My lib Button</button>
    </p>
  `,
  styles: [],
})
export class MybuttonsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
