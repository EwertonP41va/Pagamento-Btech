import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-payment',
  templateUrl: './success-payment.component.html',
  styleUrl: './success-payment.component.css'
})
export class SuccessPaymentComponent {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
