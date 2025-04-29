import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
//import { KindeAngularService } from 'kinde-angular';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
login(){
}
signup(){

}
  constructor() { }

  ngOnInit() {
  }

}
