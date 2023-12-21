import { Component } from '@angular/core';
import { StateService } from '../services/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-port2',
  templateUrl: './port2.component.html',
  styleUrls: ['./port2.component.scss']
})
export class Port2Component {
  padlockOpen1 = false;
  padlockOpen2 = false;
  padlockOpen3 = false;
  padlockOpen4 = false;
  padlockOpen5 = false;

  constructor(
    private stateService: StateService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {}

  openPadlock2() {
    this.padlockOpen2 = true;
    if (this.padlockOpen1 && this.padlockOpen3 && this.padlockOpen4 && this.padlockOpen5) {
      const dialogRef = this.dialog.open(ModalComponent, {
        data: {isClose: true},
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.stateService.openPadlock2();
        }
      });
    } else {
      this.padlockOpen2 = false;
      this._snackBar.open('É necessário abrir os cadeados menores antes de abrir o cadeado maior', 'Fechar');
    }
  }
}
