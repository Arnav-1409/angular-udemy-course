import { AbstractControl, ValidationErrors } from '@angular/forms';

// UsernameValidators.cannotContainSpace
export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };

    return null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('ok');
        if (control.value === 'arnav')
          resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 2000);;
    });
  }
}