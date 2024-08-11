import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import form-related classes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lir';
  form: FormGroup;
  numbers: number[] = [];
  rows: any[] = [];
  currentRow: number = 4;
  showSection1 = true;
  showSection2 = false;
  saveMessage: boolean = false;

  constructor(private fb: FormBuilder) {
    for (let i = 1; i <= 24; i++) {
      this.numbers.push(i);
    }
    this.form = this.fb.group({
      industry: ['', Validators.required],
      district: ['', Validators.required]
    });
    this.updateRows();
  }

  ngOnInit() {
  }
  updateRows() {
    this.rows = [];
    for (let i = 0; i < this.currentRow; i += 4) {
      this.rows.push(this.numbers.slice(i, i + 4));
    }
  }
  addRow() {
    this.currentRow += 4; // Increase the number of rows by 1
    this.updateRows(); // Update the rows array
  }
  save(){
    if (this.form.valid) {
      this.saveMessage = true;
    }
  }
  section2(){
    this.showSection1 = false;
    this.showSection2 = true;
  }
  back(){
    this.showSection1 = true;
    this.showSection2 = false;
  }
}
