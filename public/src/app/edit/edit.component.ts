import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  oneId:any;
  theItem:any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.oneId = params['id']
      this.findTheItem()
    })
  }
  findTheItem(){
    let obs = this._httpService.findOneProduct(this.oneId)
    obs.subscribe(data=>{
      this.theItem = data;
    })
  }
  update(){
    let obs = this._httpService.update(this.oneId,this.theItem)
    obs.subscribe(data=>{
      this._router.navigate(['/products'])
    })
  }
  delete(){
    let obs = this._httpService.deleteF(this.oneId)
    obs.subscribe(data=>{
      this._router.navigate(['/products'])
      
    })
  }

}
