import {Component} from '@angular/core'
import{FormControl,FormGroup,FormBuilder,Validators} from "@angular/forms";
import {CustomValidations} from "./contact.customValidationComponent"

@Component({
   selector:'reg-app',
    templateUrl:'./app/contact/contact.registrationtemplate.html'
})

class ContactRegistrationcomponent
{
    private firstName:FormControl;
    private lastName:FormControl;
    private email:FormControl;
    private password:FormControl;
    private group:FormGroup;
    constructor(private builder:FormBuilder)
    {
        this.email = new FormControl('',
            Validators.compose([Validators.required,CustomValidations.EmailValidate])
        );

        this.firstName=new FormControl('',Validators.compose
        ([Validators.required,Validators.minLength(4)]));

        this.lastName=new FormControl('',Validators.compose
        ([Validators.required,Validators.minLength(4)]));
        this.password=new FormControl('',Validators.compose
        ([Validators.required,Validators.minLength(4),Validators.maxLength(8)]));

        this.group=builder.group({
            email: this.email,
            password: this.password,
            firstName:this.firstName,
            lastName:this.lastName
        })


    }


    onSubmit()
    {
        console.log(this.group.value);
    }

}