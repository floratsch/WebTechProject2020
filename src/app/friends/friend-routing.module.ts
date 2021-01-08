
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FriendrequestComponent} from '@app/friends/friendrequest.component';


const routes: Routes = [
  {
    path: '', component: FriendrequestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule { }
