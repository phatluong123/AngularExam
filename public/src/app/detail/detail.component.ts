import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {HttpService} from "../http.service";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private id: any;
  private pet: any;
  isCliked:Boolean;
  private skills: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.isCliked = false;
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

      console.log(this.skills)
      console.log(result)
    })
  }

  deletePets(id: any) {
    this._httpService.deleteOnePet(id).subscribe(result =>{
      console.log(result)
      this._router.navigate([''])
    })
  }

  LikeThisPet(id: any, likes:Number) {
    // @ts-ignore
    this._httpService.LikeAPet(id, likes+1).subscribe(result =>{
      console.log(result)
      this.isCliked=true
      this.GetDetail()
    })
  }
}
