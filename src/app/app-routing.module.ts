import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'store',
    pathMatch:'full'
  },
  {
      path: 'store',
      loadChildren:()=> import('./store/store.module').then(m =>m.StoreModule)
  },{
  path:'cart',
component:CartComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
