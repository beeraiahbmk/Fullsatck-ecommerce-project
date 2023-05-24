import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
// import { CartforUserComponent } from './cartfor-user/cartfor-user.component';
import { PaymentComponent } from './payment/payment.component';
import { CartListForUserComponentComponent } from './cart-list-for-user-component/cart-list-for-user-component.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { GetProductComponent } from './get-product/get-product.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [{path: '',component:WelcomeComponent},
{path:'registration',component:RegistrationComponent},
{path:'userSignUp',component:RegistrationComponent},
{path:'welcomepage',component:WelcomeComponent},
{path:'login',component:LoginComponent},
{path:'forgotpassword',component:ForgotPasswordComponent},
{path:'homePage/:userId',component:HomepageComponent},
// {path:'userHome/:user_id',component:UserHomeComponent},
{path:'aboutUs',component:AboutStoreComponent},
{path:'adminPage',component:AdminHomeComponent},
{path:'addCategory',component:AddCategoryComponent},
{path:'addProduct/:categoryid',component:AddProductComponent},
{path:'viewCategory',component:ViewCategoryComponent},
{path:'updateCategory/:categoryid',component:UpdateCategoryComponent},
{path:'viewProducts/:userId',component:ViewProductComponent},
{path:'profile',component:ViewProfileComponent},
{path:'viewUsers',component:ViewUsersComponent},
{path:'viewCategories',component:CategoryComponent},
{path:'cartForUser/:productid/:userId',component:CartListForUserComponentComponent},
{path:'payment/:userId/:cartId',component:PaymentComponent},
{path:'updateUser/:userId/',component:UpdateUserComponent},
{path:'getProduct/:userId/:searchdata',component:GetProductComponent},
{path:'allProducts',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
