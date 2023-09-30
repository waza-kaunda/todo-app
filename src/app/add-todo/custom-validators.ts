import { AbstractControl, ValidatorFn } from "@angular/forms";

/**
 * A class containing custom validators for form controls.
 */
export class CustomValidators {

  /**
   * Returns a validator function that checks if the input is a valid date.
   * @returns A validator function that returns an object with a `date` property if the input is not a valid date, otherwise returns `null`.
   */
  static dateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const date = new Date(control.value);
      const isValid = !isNaN(date.valueOf());
      return isValid ? null : { date: true };
    };
  }

  /**
   * Returns a validator function that checks if the date entered is in the future.
   * @returns A validator function that returns an object with a `futureDate` property if the date is not in the future, otherwise returns `null`.
   */
  static futureDateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const date = new Date(control.value);
      const isValid = date > new Date();
      return isValid ? null : { futureDate: true };
    };
  }
}
