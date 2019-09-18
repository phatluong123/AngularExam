import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private pet: Object;
  private id: any;
  private errorsMessage: { name: string; description: string; type: string };
  duplicatedError: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.duplicatedError=''
    this.errorsMessage={name :'', type : '', description :''}
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
    });
    this.pet ={name:'', type:'', description:'', skills:['','','']}
    this.GetDetail()
  }
  GetDetail(){
    this._httpService.getOnePet(this.id).subscribe(result =>{
      this.pet = result
      console.log(result)
    })
  }
  EditPet(event : any){
    event.preventDefault()
    console.log(this.pet)
    this._httpService.updatePet(this.id ,this.pet).subscribe(result =>{
      console.log(result)
      if ( result['errors']){
        this.errorsMessage = result['errors']
        console.log(this.errorsMessage)
      }
      else if ( result['duplicatedError']){
        this.duplicatedError = result['duplicatedError']
      }
    })
  }
}
