import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('formulario ', this.signInForm);

    if (this.signInForm.valid) {
      this.clientsService.signUp(this.signInForm.value)
        .subscribe(
          (client) => {
            console.log('client ', client)
          },
          (error) => {
            swal('Error', 'No se pudo completar el registro.', 'error');
            console.error('Error creating client: ', error);
          }
        );
    } else {
      swal('Error', 'Debes completar todos los campos', 'error');
    }

    document.getElementById('sign-up-form').classList.add('was-validated');
  }

}
