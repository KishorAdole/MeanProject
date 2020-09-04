import { Component, OnInit } from '@angular/core';
import { faMapSigns } from '@fortawesome/free-solid-svg-icons';


import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faMapSigns = faMapSigns;
  public uiInvalidCredential = false;

  myFormGroup = new FormGroup({
    "Email": new FormControl('', [
      Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[.]+[a-zA-z0-9-.]+$")
    ]),
    "Password": new FormControl()
  });

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void { }

  async loginProcessHere() {
    const input = this.myFormGroup.value;
    console.log(input);
    const url = "http://localhost:3000/user";
    const result: any = await this.http.post(url, input).toPromise();

    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
}