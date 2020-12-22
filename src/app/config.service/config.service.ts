import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ConfigService {
  loggedIn = false;

  option = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  register(data: any): Observable<Response> {
    return this.http.post<Response>(this.url + 'register', data);
  }
}
