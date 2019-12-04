import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  allProducts(){
    return this._http.get('/pro')
  }
  createProduct(product){
    return this._http.post('/pro/create',product)
  }
  deleteF(id){
    return this._http.delete(`/pro/${id}`)
  }
  findOneProduct(id){
    return this._http.get(`/pro/${id}`)
  }
  update(id,product){
    return this._http.put(`/pro/${id}`,product)
  }
}
