import { Component } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastService } from '../shared/services/toast.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  value: number = 0;
  installments: number = 0;
  result?: number;

  constructor(private apiService: ApiService, private toastService: ToastService) {}

  onSubmit() {
    if (this.value <= 0 || this.installments <= 0) {
      this.toastService.showWarning('Valor e Parcelas devem ser maiores que zero');
      return;
    }

    this.apiService.post<{ value: number }>(`Calculate/calculate?installments=${this.installments}&value=${this.value}`, '')
      .subscribe({
        next: (response) => {
          this.result = response.value;
          this.toastService.showSuccess('Cálculo realizado com sucesso!');
        },
        error: () => {
          this.toastService.showError('Erro ao realizar o cálculo. Por favor, tente novamente.');
        }
      });
  }
}
