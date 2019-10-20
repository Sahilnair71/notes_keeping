import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value:string="";
  data:string[]=[];

  constructor() { }

  ngOnInit() {
    let data: string = localStorage.getItem("data");
    console.log(data);
    
    this.data= data.split(',')
  }
  buttonclick(){
    this.data.push(this.value);
    localStorage.setItem("data", this.data.toString());
    this.value="";

  }
  buttonclick1(){
    localStorage.removeItem('data');
  }

}
