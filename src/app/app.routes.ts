import { Routes } from '@angular/router';
import { AdduserComponent } from '../Pages/User/adduser/adduser.component';
import { GetallUsersComponent } from '../Pages/User/getall-users/getall-users.component';
import { UserbyidComponent } from '../Pages/User/userbyid/userbyid.component';

export const routes: Routes = [
    {path:'adduser',component:AdduserComponent},
    {path:'getallusers',component:GetallUsersComponent},
    {path:'userbyid',component:UserbyidComponent},
];
