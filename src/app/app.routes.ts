import { Route } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';

export const route: Route[] = [
   {
        path: 'dashboard',
        loadChildren: () => import('./core/dashboard/dashboard.route').then(mod => mod.DASHBOARD_ROUTE)
    }, {
        path: 'goals',
        loadChildren: () => import('./core/goals/goals.route').then(mod => mod.GOALS_ROUTE)
    }, {
        path: '',
       redirectTo:"/dashboard",
       pathMatch: 'full'
    },


];
