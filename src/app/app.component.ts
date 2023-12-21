// app.component.ts

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  currentPage?: string;
  private subscription: Subscription;

  constructor(private stateService: StateService) {
    this.subscription = stateService.currentPage$.subscribe((page) => {
      if (this.shouldShowModal()) {
        this.seeModal();
      } else {
        this.currentPage = page;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reset() {
    this.stateService.reset();
  }

  public shouldShowModal(): boolean {
    //create logic padlock
    return false;
  }

  private seeModal() {
    console.log('show modal');
  }

  confirmModal() {
    // this.currentPage = this.stateService.currentPage$.value;
  }
}
