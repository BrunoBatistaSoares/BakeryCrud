import { Component } from '@angular/core';
import { ShowModalService } from '../services/show-modal/show-modal.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ModalEnum } from '../resources/modal-enum';
import { UserService } from '../services/user/user.service';
import { first } from 'rxjs';


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
  modalMessage = '';

  signUpForm: FormGroup;
  loginForm: FormGroup;

  constructor(private showModalService: ShowModalService, private formBuilder: FormBuilder, private userService: UserService) {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]],
      confirmPassword: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]]
    });
    this.signUpForm.setValidators(this.passwordConfirmedValidator());

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]]
    });
  }

  closeModal() {
    this.showModalService.setModal(ModalEnum.Closed);
    this.signUpForm.reset();
  }

  previousModal(values: any) {

  }

  //temp
  log(x: any) {
    console.log(x);
  }

  submitSignUp() {

    if (this.signUpForm.valid) {
      return this.userService.signUp(this.signUpForm.value).pipe(first()).subscribe({
        next: () => {
          this.showModalService.setModal(ModalEnum.Message)
          this.modalMessage = 'Sucesso'
        },
        error: (err) => {
          const formData = this.signUpForm.value;
          this.modalMessage = err.error?.message || err.statusText;
          this.modal$.pipe(first()).subscribe({
            next: () => {
              this.showModalService.setModal(ModalEnum.SignUp);
              this.signUpForm.reset(formData);
            }
          });
        }
      });
    }
    else {
      this.signUpForm.markAllAsTouched();
      return null
    }

  }

  submitLogin() {
    if (this.loginForm.valid) {
      return this.userService.login(this.loginForm.value).pipe(first()).subscribe({
        next: () => {
          this.showModalService.setModal(ModalEnum.Message)
          this.modalMessage = 'Sucesso'
          //login
          // jwt token
        },
        error: (err) => {
          const formData = this.signUpForm.value;
          this.modalMessage = err.error?.message || err.statusText;
          this.modal$.pipe(first()).subscribe({
            next: () => {
              this.showModalService.setModal(ModalEnum.SignUp);
              this.signUpForm.reset(formData);
            }
          });
        }
      })
    }
    else {
      this.signUpForm.markAllAsTouched();
      return null
    }
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

  get name() { return this.signUpForm.get('name'); }
  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get confirmPassword() { return this.signUpForm.get('confirmPassword'); }
  get loginEmail() { return this.loginForm.get('Email'); }
  get loginPassword() { return this.loginForm.get('Password'); }

}
