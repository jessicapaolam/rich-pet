import { Component } from '@angular/core';
import { StateService } from '../services/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-port1',
  templateUrl: './port1.component.html',
  styleUrls: ['./port1.component.scss']
})
export class Port1Component {
  padlockOpen1 = false;
  padlockOpen2 = false;
  padlockOpen3 = false;
  padlockOpen4 = false;

  constructor(
    private stateService: StateService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {}

  openPadlock1() {
    this.padlockOpen1 = true;
    if (this.padlockOpen1 && this.padlockOpen2 && this.padlockOpen3 && this.padlockOpen4) {
      const dialogRef = this.dialog.open(ModalComponent, {
        data: {isClose: true},
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.stateService.openPadlock1();
        }
      });
    } else {
      this.padlockOpen1 = false;
      this._snackBar.open('É necessário abrir os cadeados menores antes de abrir o cadeado maior', 'Fechar');
    }
  }

}
