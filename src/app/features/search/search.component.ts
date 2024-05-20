import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Person } from '../../models/person';
import { ApiService } from '../shared/services/api.service';
import { ToastService } from '../shared/services/toast.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent {
  personFound$?: Observable<Person | null>;
  valueSearchPerson = '';

  constructor(private apiService: ApiService, private toastService: ToastService) {}

  getPersonById() {
    if (!this.valueSearchPerson) {
      this.toastService.showWarning('Por favor, insira um Id válido');
      return;
    }

    this.personFound$ = this.apiService.get<Person>(`Consult/${this.valueSearchPerson}`).pipe(
      catchError(err => {
        this.toastService.showError('Pessoa não encontrada');
        return of(null);
      })
    );
  }
}
