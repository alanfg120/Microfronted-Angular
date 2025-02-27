import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { User } from './interface/user.interface';
import { CommonModule } from '@angular/common';
import { FollowersPipe } from './pipes/followers.pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FollowersPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'mf2';
  
  user$!: Observable<User | null>;
  username = '';
  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.user$ = this.userService.userObs;
  }

  ngOnInit(): void {
    this.username = this.activateRouter.snapshot.params['username'];
    this.userService.getUser(this.username);
  }

  viewFollower(){
    this.router.navigate([`/mf3`, this.username]);
  }

  showError(){
    this.userService.generateBadRequest()
  }
}
