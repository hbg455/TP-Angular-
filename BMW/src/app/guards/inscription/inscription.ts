import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.html',
  styleUrls: ['./inscription.css']
})
export class InscriptionComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]{4,}$/)]],
      nom: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]{4,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Handle registration logic here
      console.log(this.registerForm.value);
    }
  }
}
