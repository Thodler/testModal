import {Component, inject} from '@angular/core';
import {Action} from "../action";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  isRequest: boolean = false;
  action!: Action;
  private dialog = inject(MatDialog)

  onClick(actionType: string) {
    this.openDialog(actionType);
  }

  openDialog(actionType: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { action: actionType }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
