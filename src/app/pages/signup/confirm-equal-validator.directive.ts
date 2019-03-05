import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive ,Input} from '@angular/core';
import{NgModule}from'@angular/core';
import { Key } from 'protractor';
@Directive({
    selector:'[appConfirmEqualValidator]',
    providers:[{
           
            provide:NG_VALIDATORS,
            useExisting:ConfirmEqualValidatorDirective,
            multi:true
        
    }]
})
export class ConfirmEqualValidatorDirective implements Validator{
    @Input()appConfirmEqualValidator:string;
     validate(control:AbstractControl):{[Key:string]:any} | null{
            const controltoCompare=control.parent.get(this.appConfirmEqualValidator);
            if(controltoCompare && controltoCompare.value !==control.value){
                return{'notEqual':true  };
            }
            return null; 
     }
   
}