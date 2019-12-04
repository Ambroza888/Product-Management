import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { HomeComponent } from './home/home.component'
import { CreatePComponent } from './create-p/create-p.component'
import { EditComponent} from './edit/edit.component'
const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'home', component:HomeComponent},
  {path: 'products/new', component:CreatePComponent},
  {path: 'edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
