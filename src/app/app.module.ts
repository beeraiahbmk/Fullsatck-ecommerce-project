import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// ------------
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutStoreComponent } from './about-store/about-store.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { CategoryComponent } from './category/category.component';
import { PaymentComponent } from './payment/payment.component';
import { CartListForUserComponentComponent } from './cart-list-for-user-component/cart-list-for-user-component.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { GetProductComponent } from './get-product/get-product.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegistrationComponent,
    LoginComponent,
    HomepageComponent,
    AdminHomeComponent,
    ForgotPasswordComponent,
    AboutStoreComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    AddProductComponent,
    UpdateCategoryComponent,
    ViewProductComponent,
    ViewProfileComponent,
    ViewUsersComponent,
    CategoryComponent,
    PaymentComponent,
    CartListForUserComponentComponent,
    UpdateUserComponent,
    GetProductComponent,
    ProductsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
