import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-port3',
  templateUrl: './port3.component.html',
  styleUrls: ['./port3.component.scss']
})
export class Port3Component {
  enterPassword = '';

  constructor(public stateService: StateService) {}

  setPassword(digit: string) {
    this.stateService.setPassword(digit);
    this.enterPassword += digit;
  }
}
