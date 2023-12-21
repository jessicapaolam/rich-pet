import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-port2',
  templateUrl: './port2.component.html',
  styleUrls: ['./port2.component.scss']
})
export class Port2Component {
  padlockOpen2 = false;

  constructor(private stateService: StateService) {}

  openPadlock2() {
    this.stateService.openPadlock2();
    this.padlockOpen2 = true;
  }
}
