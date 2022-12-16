import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidatorFn, FormControl, Validators } from '@angular/forms';
import { Quote } from 'src/app/quotes/interfaces/IQuote';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  step = 1;
  @Input() quoteFirstStep!: Quote;
  @Output() onFormQuoteGroupChange = new EventEmitter();
  userForm: FormGroup = {} as FormGroup;
  bufferValue = 0;
  value = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: [''],
        cpf: [''],
      }),
      addressesInfo: this.fb.group({
        street: [''],
        number: [''],
        zipcode: [''],
        city: [''],
      }),
    });
    this.userForm.valueChanges.subscribe(() => this.onFormQuoteGroupChange.emit(this.userForm.value));

  }
  previous() {
    this.step = this.step - 1;
    this.value = this.value - 50;
    this.bufferValue = this.bufferValue - 70;
  }
  next() {
    this.step = this.step + 1;
    this.value = this.value + 50;
    this.bufferValue = this.bufferValue + 70;

  }
  get firstName() { return this.userForm.get('personalInfo.firstName') as FormControl; }
}
