// This component contains a simple demo of Typed Forms.
// Alter the class and methods below to use the new forms package.
// To run the app, wait for all dependencies to install, then run `ng serve`.

import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profileForm = new FormGroup<IUser>({
    firstName: new FormControl("John"),
    lastName: new FormControl("Doe"),
    age: new FormControl(42),
    address: new FormGroup<IAddress>({
      street: new FormControl("1234 Powell St"),
      city: new FormControl("San Francisco"),
      state: new FormControl("CA"),
      zip: new FormControl("94110"),
    }),
  });


  getPersonGroup() : FormGroup<PersonToFormControl>{
    return new FormGroup<PersonToFormControl>({
      name: new FormControl('bob', [
        Validators.required,
        Validators.minLength(4),
        this.forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      age: new FormControl(5),
      location: new FormControl("Earth"),
    })
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }

  person?: FormGroup<PersonToFormControl>;

  ngOnInit() {
  }

  createPerson() {
    this.person = this.getPersonGroup(); 
    this.person.valueChanges.subscribe(value => {
      console.log(this.person)
    });
    this.person.markAsDirty();
  }
}

interface IUser {
  [key: string]: AbstractControl<any, any>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  age: FormControl<number | null>;
  address: FormGroup<IAddress>;
}

interface IAddress {
  [key: string]: AbstractControl<any, any>;
  street: FormControl<string | null>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  zip: FormControl<string | null>;
}

interface Person {
  name: string;
  age: number;
  location: string;
}

type TypeToFormControl<T> = {
  [P in keyof T]: FormControl<T[P] | null>;
};

type PersonToFormControl = TypeToFormControl<Person>;
