
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FriendRoutingModule} from '@app/friends/friend-routing.module';
import { FriendrequestComponent} from '@app/friends/friendrequest.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FriendRoutingModule
  ],
  declarations: [
    FriendrequestComponent,
  ]
})
export class FriendsModule { }
