import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  
  constructor(private router: Router, private api: HttpClient) {}

  registerForm: FormGroup = new FormGroup({
    fcName: new FormControl('', Validators.required),
    fcAge: new FormControl(0, Validators.min(1)),
    fcEmail: new FormControl('', Validators.required),
    fcPassword: new FormControl('', Validators.required),
    fcPassword2: new FormControl('', Validators.required),
  });

  error: string = '';

  ngOnInit(): void {}

  fcEmail = new FormControl();
  fcPassword = new FormControl();
  requestResult = '';
  successID:{name:string, age:number, email:string,password:string} = {name:"", age:0, email:"",password:""};

  async onSubmit() {
    if (
      this.registerForm.value['fcPassword'] !==
      this.registerForm.value['fcPassword2']
    ) {
      this.error = 'Password doesnt match!';
      return;
    }
    if (!this.registerForm.valid) {
      {
        this.error = 'No fields must be empty';
        return;
      }
    }
    if (this.registerForm.valid) {
      var payload: {
        name: string;
        email: string;
        age: number;
        password: string;
      };
      payload = {
        name: this.registerForm.value.fcName,
        age: this.registerForm.value.fcAge,
        email: this.registerForm.value.fcEmail,
        password: this.registerForm.value.fcPassword,
      };
      console.log(payload);
      
      var result: any= await this.api
      .post(environment.API_URL+'/user/register', {
        name: payload.name,
        age: payload.age,
        email: payload.email,
        password: payload.password,
      }).toPromise();
      this.nav('home');
  }
}

  nav(destination: string) {
    this.router.navigate([destination]);
  }
}