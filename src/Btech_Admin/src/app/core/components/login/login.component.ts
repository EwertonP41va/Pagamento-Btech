// login.component.ts
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthResponse } from '../../../model/authresponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  UserName: string = '';
  email: string = '';
  password: string = '';
  passwordFieldType: string = 'password';
  errorMessage: string | null = null;
  isSignDivVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }



  login(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.email, this.password).subscribe(
        (response: AuthResponse) => {
          form.reset();
          this.errorMessage = null;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login bem-sucedido!',
            text: 'Você está agora logado.',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            this.router.navigate(['/dashboard']);
          });
        },
        (error: any) => {
          this.errorMessage =
            'Falha no login. Verifique suas credenciais e tente novamente.';
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Falha no Login',
            text: 'Não foi possível fazer login. Verifique suas credenciais.',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
    }
  }
}
