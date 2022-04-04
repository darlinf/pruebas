import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRequestComponent } from './new-request/new-request.component';
import { ManualRequestsComponent } from './manual-requests.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ManualRequestsComponent,
    data: {
      slug: 'requests',
      name: 'Solicitudes Manuales',
    }
  }, {
    path: 'new-requests',
    loadChildren: () => import('./new-request/new-request.module').then(m => m.NewRequestModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualRequestsRoutingModule { }
