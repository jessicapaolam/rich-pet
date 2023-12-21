import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-port1',
  templateUrl: './port1.component.html',
  styleUrls: ['./port1.component.scss']
})
export class Port1Component {
  padlockOpen1 = false;

  constructor(private stateService: StateService) {}

  openPadlock1() {
    this.stateService.openPadlock1();
    this.padlockOpen1 = true;
  }
}
