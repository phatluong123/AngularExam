import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private pets: any;

  constructor(
    private _httpService :HttpService
  ) {

  }

  ngOnInit() {
    this.GetAllPet()
  }
  GetAllPet(){
    this._httpService.Getall().subscribe(result =>{
      this.pets = result
    })
  }
}
