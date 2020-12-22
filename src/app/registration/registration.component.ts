import { Component, OnInit } from '@angular/core';
import {User} from '../../user/user';
import {ConfigService} from '../config.service/config.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public message: Response = new Response();
  private errorMessage: string|null = null;


  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ConfigService: ConfigService, private route: Router) { }

  ngOnInit(): void {
  }

  register(id: any, username: any, password: any, passwordWh: any): void {
      if (password.value !== passwordWh.value) {
        console.log('Passwörter nicht überein!');
      } else {
        const input: User = new User(id.value, username.value, password.value);
        this.ConfigService.register(input).subscribe(
          (data: Response) => {this.route.navigate(['login']);
          },
          (error) => {this.errorMessage = 'Benutzer existiert bereits'}
        );
      }
  }


}
