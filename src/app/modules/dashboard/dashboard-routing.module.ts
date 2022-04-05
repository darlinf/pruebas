import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardLayoutComponent } from "./shared/layout/dashboard-layout/dashboard-layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AnalistSubscriptionRequestsComponent } from "./analist-subscription-requests/analist-subscription-requests.component";
import { ManualAssignmentComponent } from './manual-assignment/manual-assignment.component';
import { RolesComponent } from "./roles/roles.component";
import { SplashScreenComponent } from "src/app/splash-screen/splash-screen.component";
import { UsersComponent } from './users/users.component';
import { RequestDetailComponent } from "./analist-subscription-requests/request-detail/request-detail.component";
import { ManualRequestsComponent } from './manual-requests/manual-requests.component';

const routes: Routes = [
    { path: 'login', component: SplashScreenComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { 
        path: 'dashboard', 
        component: DashboardLayoutComponent,
        //canActivate: [AutoLoginPartialRoutesGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { 
                path: 'requests',
                component: AnalistSubscriptionRequestsComponent,
                loadChildren: () => import('./analist-subscription-requests/analist-subscription-requests.module').then((m) => m.AnalistSubscriptionRequestsModule), 
            },
            { path: 'request-detail', component: RequestDetailComponent },
            { 
                path: 'manual-requests',
                // component: ManualRequestsComponent,
                loadChildren: () => import('./manual-requests/manual-requests.module').then((m) => m.ManualRequestsModule),
            },
            { path: 'manual-assignment', component: ManualAssignmentComponent },
            { path: 'roles', component: RolesComponent },
            { path: 'users', component: UsersComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class DashboardRoutingModule { }