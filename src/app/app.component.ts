import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lir';

  numbers: number[] = [];

  constructor() {
    for (let i = 1; i <= 24; i++) {
      this.numbers.push(i);
    }
  }
}
