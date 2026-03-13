import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard';
import { AddExpenseComponent } from './add-expense/add-expense';
import { ExpenseListComponent } from './expense-list/expense-list';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { AddIncomeComponent } from './add-income/add-income';
import { IncomeListComponent } from './income-list/income-list';
import { ExpenseCalendarComponent } from './expense-calendar/expense-calendar';
import { ProfileComponent } from './profile/profile';

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

{
path:'add-income',
component:AddIncomeComponent
},

{
path:'income',
component:IncomeListComponent
},
{
path:'calendar',
component:ExpenseCalendarComponent
},
{
path:'profile',
component:ProfileComponent
},
// DEFAULT ROUTE
{
path:'',
redirectTo:'login',
pathMatch:'full'
}

];