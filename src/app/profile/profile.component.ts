// This component contains a simple demo of Typed Forms.
// Alter the class and methods below to use the new forms package.
// To run the app, wait for all dependencies to install, then run `ng serve`.

import { Component } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
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

  partyForm: TPartyForm = new FormGroup({
    address: new FormGroup({
      house: new FormControl(1234),
      street: new FormControl("Powell St"),
    }),
    formal: new FormControl(false),
    foodOptions: new FormArray<FormControl<string | null>[]>([
      new FormControl<string | null>("White Russian"),
    ]),
  });

  person = new FormGroup<PersonWithFormControl>({
    name: new FormControl("1234 Powell St"),
    age: new FormControl(42),
    location: new FormControl("CA"),
  })

  populate() {
    this.profileForm.controls.age.patchValue(5);
    this.partyForm.controls.address.controls.house;
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
  street: FormControl<string | null>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  zip: FormControl<string | null>;
}

type TPartyForm = FormGroup<{
  address: FormGroup<{
    house: FormControl<number | null>;
    street: FormControl<string | null>;
  }>;
  formal: FormControl<boolean | null>;
  foodOptions: FormArray<FormControl<string | null>[]>;
}>;

interface Person {
  name: string;
  age: number;
  location: string;
}

type TypeToFormControl<T> = {
  [P in keyof T]: FormControl<T[P] | null>;
}

type PersonWithFormControl = TypeToFormControl<Person>;
