import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { DitalsComponent } from './ditals/ditals.component';
import { CartComponent } from './cart/cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeadComponent,
    DitalsComponent,
    CartComponent,
    ProductCardComponent,
    ProductCarouselComponent,
    PaymentMethodComponent,
    PaymentComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,    
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers:  [Title],
  bootstrap: [AppComponent],
})
export class AppModule { }
