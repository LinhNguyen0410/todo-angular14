import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, of, pipe } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TodoGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isValidAccount =
      this.authService.getCurrentUser()?.userName === 'linh1234' &&
      this.authService.getCurrentUser()?.password === '123';
    if (isValidAccount) {
      localStorage.setItem('isAdmin', JSON.stringify(isValidAccount));
    }
    return of(JSON.parse(localStorage.getItem('isAdmin') || ''));
  }
}
