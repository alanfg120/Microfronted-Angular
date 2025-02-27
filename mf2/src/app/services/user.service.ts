import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';


// Rxjs para compartir informacion entre componentes y microfrontends
@Injectable({
  providedIn: 'root'
})
export class UserService  {

  
  private user$ = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient) { }
  

  getUser(username: string) {
    return this.http.get<User>(`https://api.github.com/users/${username}`).subscribe((user) => {
      this.user$.next(user);
    });
  }

  getFloowers(username: string) {
    return this.http.get<User>(`https://api.github.com/users/${username}/followers`).subscribe((user) => {
      this.user$.next(user);
    });
  }

  generateBadRequest() {
    return this.http.get('https://api.github.com/invalid-endpoint').subscribe(console.log)
  }

  get userObs() {
    return this.user$.asObservable();
  }


}
