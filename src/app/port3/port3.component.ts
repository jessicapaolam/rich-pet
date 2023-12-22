import { Component } from '@angular/core';
import { StateService } from '../services/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-port3',
  templateUrl: './port3.component.html',
  styleUrls: ['./port3.component.scss']
})
export class Port3Component {
  enterPassword = '';
  padlockOpen = false;

  constructor(
    public stateService: StateService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {}

  setPassword(digit: string) {
    this.stateService.setPassword(digit);
    this.enterPassword += digit;
  }

  confirmPassword() {
    if (this.enterPassword == '28091998') {
      this.padlockOpen = true;
        const dialogRef = this.dialog.open(ModalComponent, {
          data: {isClose: true},
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.stateService.openPadlock3();
          }
        });
    } else {
      this._snackBar.open('Senha incorreta.', 'Fechar');
    }
  }

  clearPassword() {
    this.enterPassword = '';
  }
}
