import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }
  showSuccess() {
    this.toastr.success('Your Account is created!', 'Done!');
  }
  warning() {
    this.toastr.warning('Fields Inalid', 'Faild!');
  }
}
