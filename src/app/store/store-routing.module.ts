import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePageComponent } from './components/table-page/table-page.component';
import { DitalsComponent } from '../ditals/ditals.component';
import { PaymentComponent } from '../payment/payment.component';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
      path: 'home',
      component: TablePageComponent,
      children: [
          {
            path:'',
            redirectTo:'payments',
            pathMatch:'full'
          },
          {
            path: 'invoice',
            loadChildren:()=> import('../store/pages/invoice/invoice.module').then(m =>m.InvoiceModule)
          },
          {
            path: 'orders',
            loadChildren:()=> import('../store/pages/orders/orders.module').then(m =>m.OrdersModule)
          },
          {
            path: 'payments',
            loadChildren:()=> import('../store/pages/payments/payments.module').then(m =>m.PaymentsModule)
          },{
            path:'invoice/:id',
            component:DitalsComponent
          }
      ],}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
