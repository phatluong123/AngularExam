import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){

  }
  createPet (pet){
    return this._http.post('/createPet', pet)
  }
  Getall(){
    return this._http.get('/getAll')
  }
  getOnePet(id ){
    console.log(id)
    return this._http.get('/getOne/'+id)
  }
  deleteOnePet(id){
    console.log(id)
    return this._http.delete('/deleteOne/'+id)
  }
  LikeAPet(id, likes){
    console.log(id, likes)
    return this._http.put('/likeOne/'+id, {like:likes})
  }
  updatePet(id, pet){
    return this._http.put('/EditOne/'+id, {pet:pet})
  }
}
