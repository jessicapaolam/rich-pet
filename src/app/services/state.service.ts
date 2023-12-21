import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private padlockOpen1 = false;
  private padlockOpen2 = false;
  private padlockOpen3 = false;
  private enterPassword = '';

  private currentPageSubject = new BehaviorSubject<string>('port1');
  currentPage$ = this.currentPageSubject.asObservable();

  openPadlock1() {
    if (!this.padlockOpen1) {
      this.padlockOpen1 = true;
      this.refreshActualPage('port2');
    }
  }

  openPadlock2() {
    if (this.padlockOpen1 && !this.padlockOpen2 && !this.padlockOpen3) {
      this.padlockOpen2 = true;
      this.refreshActualPage('port3');
    }
  }

  setPassword(password: string) {
    if (this.enterPassword.length < 8) {
      this.enterPassword += password;
    }

    if (this.enterPassword.length === 8) {
      this.openPadlock3();
    }
  }

  openPadlock3() {
    if (this.padlockOpen1 && !this.padlockOpen3 && this.correctPassword()) {
      this.padlockOpen3 = true;
      this.refreshActualPage('cats');
    }
  }

  reset() {
    this.padlockOpen1 = false;
    this.padlockOpen2 = false;
    this.padlockOpen3 = false;
    this.enterPassword = '';
    this.refreshActualPage('port1');
  }

  correctPassword(): boolean {
    return this.enterPassword === '28091998';
  }

  private refreshActualPage(page: string) {
    this.currentPageSubject.next(page);
  }
}
