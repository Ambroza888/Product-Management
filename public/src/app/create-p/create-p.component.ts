import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { HttpService } from '../http.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-p',
  templateUrl: './create-p.component.html',
  styleUrls: ['./create-p.component.css']
})
export class CreatePComponent implements OnInit {
  product:any;
  constructor(
    private _HttpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }
  ngOnInit() {
    this.product = {
      title:"",
      price:"",
      imgUrl:''
  }
}
  createProduct(){
    const obs = this._HttpService.createProduct(this.product)
    obs.subscribe(data=>{
      console.log(data)
      this.product = {
        title:"",
        price:"",
        imgUrl:''
    }
    this._router.navigate(['/products'])
    })
  }
}

