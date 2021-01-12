
import {Component, OnInit} from '@angular/core';
import { AccountService, AlertService } from '@app/_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({ templateUrl: 'friendrequest.component.html' })
export class FriendrequestComponent implements OnInit{
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  users = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit(): any {
    this.accountService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }


  // TODO
  addFriend(): any {

      const userid = this.accountService.userValue.id;
      console.log(userid);

      // wie bekommt man friendid ??
      const friendid = this.accountService.userValue.id + 1;
      console.log(friendid);

      this.accountService.addFriend(userid, friendid).subscribe();
  }
}

