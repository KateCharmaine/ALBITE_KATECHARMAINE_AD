import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private api: HttpClient) {}
  
  users: Array<any> = [];

  ngOnInit(): void {
    this.getAll();
  }


  async getAll (){
    var result: any = await this.api
    .get(environment.API_URL + '/user/all').toPromise();
    this.users = result.data;
  }

  nav(destination: string) {
    this.router.navigate([destination]);
  }
}