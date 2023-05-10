import { Component } from '@angular/core';
import { ShowModalService } from '../services/show-modal/show-modal.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ModalEnum } from '../resources/modal-enum';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  //observables 
  modal$ = this.showModalService.getModal();
  isLoading$ = this.showModalService.getIsLoading();
  modalEnum: typeof ModalEnum = ModalEnum;

  signUpForm: FormGroup;

  constructor(private showModalService: ShowModalService, private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]],
      confirmPassword: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]]
    });
    this.signUpForm.setValidators(this.passwordConfirmedValidator());
    console.log(this.modal$);
    console.log(this.isLoading$);
  }

  closeModal() {
    this.showModalService.setModal(ModalEnum.Closed);
    this.signUpForm.reset();
  }

  //temp
  log(x: any) {
    console.log(x);
  }

  //this is not supposed to be asyn, temp return type for testing only
  async onSubmit(): Promise<Boolean> {

    if (this.signUpForm.valid) { console.log('submited', this.signUpForm.value); }
    else { this.signUpForm.markAllAsTouched() }

    //simulating server delay TODO interceptor to add delay handling for all http requests
    this.log("started loading")
    this.showModalService.setIsLoading(true);
    try {
      const success = await new Promise<boolean>(f => setTimeout(f, 5000));

    } catch (error) {
      this.showModalService.setIsLoading(false);
      this.showModalService.setModal(ModalEnum.Failed);
      return false;
    }

    this.showModalService.setIsLoading(false);
    this.log("finished loading")

    this.showModalService.setModal(ModalEnum.Success);

    return true
  }

  passwordConfirmedValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')!;
      const confirmPassword = formGroup.get('confirmPassword')!;
      if (password.value !== confirmPassword.value) {
        return ({ doesNotMatch: true });
      }
      return null;
    }
  }

  get email() { return this.signUpForm.get('email')!; }
  get password() { return this.signUpForm.get('password')!; }
  get confirmPassword() { return this.signUpForm.get('confirmPassword')!; }

}
