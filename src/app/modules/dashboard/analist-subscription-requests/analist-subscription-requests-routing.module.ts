import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalistSubscriptionRequestsComponent } from './analist-subscription-requests.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { DashboardLayoutComponent } from '../shared/layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
    { 
        path:'dashboard', 
        component: DashboardLayoutComponent,
        data: {
            slug: 'request',
            name: 'Solicitudes'
        },
        children: [
            {
                path:'request', 
                component: AnalistSubscriptionRequestsComponent,
            },
            { 
                path:'request-detail', 
                component: RequestDetailComponent,
                data: {
                    slug: 'request/request-detail',
                    name: 'Solicitudes'
                }
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnalistSubscriptionRequestRoutindModule { }