import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {}

  showError(message: string, title: string = ''): void {
    this.toastr.error(message, title, {
      timeOut: 2000,
      progressBar: true
    });
  }

  showWarning(message: string, title: string = ''): void {
    this.toastr.warning(message, title, {
      timeOut: 2000,
      progressBar: true
    });
  }

  showSuccess(message: string, title: string = ''): void {
    this.toastr.success(message, title, {
      timeOut: 2000,
      progressBar: true
    });
  }

  showInfo(message: string, title: string = ''): void {
    this.toastr.info(message, title, {
      timeOut: 2000,
      progressBar: true
    });
  }
}
