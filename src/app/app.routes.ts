import { Routes } from '@angular/router';
import { SearchComponent } from './features/search/search.component';
import { RegisterComponent } from './features/register/register.component';

export const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
    title: 'Buscar nome',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Cadastro de Parcelas'
  },
];
