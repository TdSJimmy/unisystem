import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileModalComponent } from './profile-modal.component';

const routes: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      { path: '', component: ProfileModalComponent, outlet: 'modal' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
