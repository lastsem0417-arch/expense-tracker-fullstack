import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard';
import { AddExpenseComponent } from './add-expense/add-expense';
import { ExpenseListComponent } from './expense-list/expense-list';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';

export const routes: Routes = [

{
path:'login',
component:LoginComponent
},

{
path:'register',
component:RegisterComponent
},

{
path:'dashboard',
component:DashboardComponent
},

{
path:'add',
component:AddExpenseComponent
},

{
path:'expenses',
component:ExpenseListComponent
},

// DEFAULT ROUTE
{
path:'',
redirectTo:'login',
pathMatch:'full'
}

];