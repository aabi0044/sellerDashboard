import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }
  showSuccess(m) {
    this.toastr.success(m);
  }
  warning(m) {  
    this.toastr.warning(m);
  }
}
