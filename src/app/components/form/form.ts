import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class FormComponent implements OnInit {
  public username?: string = '';
  public password?: string = '';
  public isValid?: boolean = false;
  public msgErr?: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.route.routeConfig?.path === '') {
      localStorage.setItem('isAdmin', false.toString());
    }
  }
  handleBack = () => {
    this.router.navigateByUrl('/');
    localStorage.removeItem('isAdmin');
  };
  handLeLoginTodo = () => {
    this.authService.setCurrentUser({
      userName: this.username,
      password: this.password,
    });
    if (
      this.authService.getCurrentUser()?.userName === 'linh1234' &&
      this.authService.getCurrentUser()?.password === '123'
    ) {
      this.isValid = true;
      this.router.navigateByUrl('/todo');
    } else {
      this.isValid = false;
      this.msgErr = 'Invalid username or password...';
    }
  };
}
