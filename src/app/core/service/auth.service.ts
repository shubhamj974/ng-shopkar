import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private roleSubject = new BehaviorSubject<string | null>(null);
  role$ = this.roleSubject.asObservable();

  constructor() {
    // For demo, set a default role. Replace with real login logic.
    this.setRole('customer');
  }

  setRole(role: string) {
    this.roleSubject.next(role);
  }

  getRole(): string | null {
    return this.roleSubject.value;
  }
}
