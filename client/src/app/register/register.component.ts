import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any={};

  @Output() cancelRegister=new EventEmitter();
  constructor(private _accountService:AccountService, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this._accountService.register(this.model).subscribe(response=>
      {
        console.log(response);
        this.cancel();
      },error=>{
        console.log(error)
        this.toastrService.error(error.error);
      });
      
    
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
