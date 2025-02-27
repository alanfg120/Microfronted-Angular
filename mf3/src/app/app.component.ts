import { Component, inject, Injector, OnInit, ProviderToken } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  router = inject(ActivatedRoute);
  injector = inject(Injector);
  username = '';
  users$!: Observable<User[]>;

  async ngOnInit() {
    // Sevicio de Microfronted 2 de usuarios mediante importacion dinamica
    const m = await import('mf2/UserService') ;
    const token = m.UserService as ProviderToken<any>;
    const userService = this.injector.get(token);
    userService.getFloowers(this.router.snapshot.params['username']);
    this.users$ = userService.userObs;
  }

}
