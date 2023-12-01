import { Routes } from '@angular/router';
import { AdduserComponent } from '../Pages/User/adduser/adduser.component';
import { GetallUsersComponent } from '../Pages/User/getall-users/getall-users.component';
import { UserbyidComponent } from '../Pages/User/userbyid/userbyid.component';
import { GetallsellersComponent } from '../Pages/User/Seller/getallsellers/getallsellers.component';
import { SellerbyidComponent } from '../Pages/User/Seller/sellerbyid/sellerbyid.component';
import { AddsellerComponent } from '../Pages/User/Seller/addseller/addseller.component';
import { AddproductComponent } from '../Pages/User/product/addproduct/addproduct.component';
import { GetallproductsComponent } from '../Pages/User/product/getallproducts/getallproducts.component';
import { ProductbyidComponent } from '../Pages/User/product/productbyid/productbyid.component';

export const routes: Routes = [
    {path:'adduser',component:AdduserComponent},
    {path:'getallusers',component:GetallUsersComponent},
    {path:'userbyid',component:UserbyidComponent},
    {path:'addseller',component:AddsellerComponent},
    {path:'getallsellers',component:GetallsellersComponent},
    {path:'sellerbyid',component:SellerbyidComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'getallproducts',component:GetallproductsComponent},
    {path:'productbyid',component:ProductbyidComponent},

];
