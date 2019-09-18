import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pet:Object;
  private errorsMessage: any;
  private duplicatedError: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.duplicatedError=''
    this.errorsMessage={name :'', type : '', description :''}
    this.pet ={name:'', type:'', description:'', skills:['','','']}
    console.log(this.pet)
  }

  CreatePet(event: any) {
    event.preventDefault();
    console.log(this.pet)
    this._httpService.createPet(this.pet).subscribe(result=>{
      console.log(result)
      if ( result['errors']){
        this.errorsMessage = result['errors']
        console.log(this.errorsMessage)
      }
      else if ( result['duplicatedError']){
        this.duplicatedError = result['duplicatedError']
      }
      this._router.navigate([''])
    })
  }
}
