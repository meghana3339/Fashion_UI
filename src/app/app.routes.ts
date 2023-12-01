import { Routes } from '@angular/router';
import { AdduserComponent } from '../Pages/user/adduser/adduser.component';
import { GetallUsersComponent } from '../Pages/user/getallusers/getallusers.component';
import { UserbyidComponent } from '../Pages/user/userbyid/userbyid.component';
import { GetallsellersComponent } from '../Pages/seller/getallsellers/getallsellers.component';
import { SellerbyidComponent } from '../Pages/seller/sellerbyid/sellerbyid.component';
import { AddsellerComponent } from '../Pages/seller/addseller/addseller.component';
import { AddproductComponent } from '../Pages/product/addproduct/addproduct.component';
import { GetallproductsComponent } from '../Pages/product/getallproducts/getallproducts.component';
import { ProductbyidComponent } from '../Pages/product/productbyid/productbyid.component';
import { AddbrandComponent } from '../Pages/brand/addbrand/addbrand.component';
import { GetallbrandsComponent } from '../Pages/brand/getallbrands/getallbrands.component';
import { BrandbyidComponent } from '../Pages/brand/brandbyid/brandbyid.component';

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
    {path:'addbrand',component:AddbrandComponent},
    {path:'getallbrands',component:GetallbrandsComponent},
    {path:'brandbyid',component:BrandbyidComponent},

];
