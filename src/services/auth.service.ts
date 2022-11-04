import { Injectable } from '@angular/core';
import { userInfo } from 'src/app/types/todo';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userInfo?: userInfo;

  setCurrentUser(user: userInfo) {
    this.userInfo = user;
  }
  getCurrentUser() {
    return this.userInfo;
  }
}
