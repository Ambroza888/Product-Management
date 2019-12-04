import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  all_products:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.allProducts();
  }
  allProducts(){
    let obs = this._httpService.allProducts()
    obs.subscribe(data=>{
      console.log(data)
      this.all_products = data;
    })
  }
  deleteF(id){
    let obs = this._httpService.deleteF(id)
    obs.subscribe(data =>{
      console.log(data)
      this.allProducts()
    })
  }
}
