import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidatorFn, FormControl, Validators } from '@angular/forms';
import { Quote } from 'src/app/quotes/interfaces/IQuote';
import { User } from '../interfaces/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  hide = true;
  step = 1;
  @Input() quoteFirstStep!: Quote;
  @Output() onFormQuoteGroupChange = new EventEmitter();
  userForm: FormGroup = {} as FormGroup;
  bufferValue = 0;
  value = 0;
  constructor(
    private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      loginInfo: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
        cellphoneNumber: ['', [Validators.required, Validators.minLength(6)]],
      }),
      personalInfo: this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: [''],
        cpf: [''],
      }),
      residencialAddressInfo: this.fb.group({
        street: [''],
        number: [''],
        zipcode: [''],
        city: [''],
      }),
      comercialAddressInfo: this.fb.group({
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
    this.value = this.value - 25;
    this.bufferValue = this.bufferValue - 70;
  }
  next() {
    this.userService.getByEmail(this.email.value)
      .subscribe((user: User) => {
        if (user) {
          console.log('usuario existe')
        }
        this.userService.createUser(this.userForm.value).subscribe(() => {
          console.log('usuario criado')
        })
      });
    this.step = this.step + 1;
    this.value = this.value + 25;
    this.bufferValue = this.bufferValue + 70;

  }

  get password() { return this.userForm.get('loginInfo.password') as FormControl; }
  get confirmPassword() { return this.userForm.get('loginInfo.confirmPassword') as FormControl; }
  get firstName() { return this.userForm.get('personalInfo.firstName') as FormControl; }
  get email() { return this.userForm.get('loginInfo.email') as FormControl; }
}
