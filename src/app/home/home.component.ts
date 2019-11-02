import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const BASE_URL = "https://notes-api-sanketnaik99.herokuapp.com/api/v1";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value: string = "";
  data: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get(`${BASE_URL}/get-notes`).subscribe(res => {
      this.data = res['data'];
    })
  }

  addData(data: string){
    const params = new HttpParams({
      fromObject: {
        data: data
      }
    });
    this.http.post(`${BASE_URL}/add-note`, params).subscribe(res => {
      console.log(res);
      if(res['result'] == "SUCCESS"){
        this.getData();
      }
    })
  }
  buttonclick(){
    this.addData(this.value);
    this.value="";

  }
  buttonclick1(){
    localStorage.removeItem('data');
  }

}
