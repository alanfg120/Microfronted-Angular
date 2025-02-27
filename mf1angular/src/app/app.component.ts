import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from './interfaces/users.interface';
import { UsersService } from './services/users.service';
import { UsernamePipe } from './pipes/username.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [UsernamePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UsernamePipe]
})
export class AppComponent  implements OnInit {

  ngOnInit(): void {
    this.getUsers();
  }
  users = signal<User[]>([]);

  private userService = inject(UsersService);
  private userPipe = inject(UsernamePipe);
  private router = inject(Router);
  
  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users.set([...users]);
    });
  }

  viewDetails(url: string) {
    const username = this.userPipe.transform(url);
    this.router.navigate([`/mf2/${username}`]);
  }
  
}
