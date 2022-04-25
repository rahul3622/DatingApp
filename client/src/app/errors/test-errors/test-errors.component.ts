import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {

  baseUrl = "https://localhost:5001/api/";

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }


  get404Error() {
    this._httpClient.get(this.baseUrl + 'buggy/not-found').subscribe(respose => {
      console.log(respose)
    },
      error => {
        console.log(error)
      })
  }

  get400Error() {
    this._httpClient.get(this.baseUrl + 'buggy/bad-request').subscribe(respose => {
      console.log(respose)
    },
      error => {
        console.log(error)
      })
  }

  get500Error() {
    this._httpClient.get(this.baseUrl + 'buggy/server-error').subscribe(respose => {
      console.log(respose)
    },
      error => {
        console.log(error)
      })
  }

  get401Error() {
    this._httpClient.get(this.baseUrl + 'buggy/auth').subscribe(respose => {
      console.log(respose)
    },
      error => {
        console.log(error)
      })
  }

  get400ValidationError() {
    this._httpClient.post(this.baseUrl + 'account/register',{}).subscribe(respose => {
      console.log(respose)
    },
      error => {
        console.log(error)
      })
  }
}
