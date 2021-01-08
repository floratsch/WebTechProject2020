
import {Component, OnInit} from '@angular/core';
import { AccountService, AlertService } from '@app/_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({ templateUrl: 'friendrequest.component.html' })
export class FriendrequestComponent {
  form: FormGroup;
  username: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  private findFriend() {
    return this.accountService.getByUsername(this.username);
  }
}

