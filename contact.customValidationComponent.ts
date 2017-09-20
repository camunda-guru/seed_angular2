import {FormControl} from '@angular/forms'

export class CustomValidations
{
   static  EmailValidate(formControl:FormControl): {[key:string]:boolean}
   {
       let pattern:RegExp = /\S+@\S+\.\S+/;
       return pattern.test(formControl.value)?null:{emailFormat:true};
   }
}