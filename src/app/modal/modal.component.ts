import {Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {ActionService} from "../action.service";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButton
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  public dialogRef = inject(MatDialogRef<ModalComponent>);
  public data = inject(MAT_DIALOG_DATA)
  private actionService =  inject(ActionService);

  onClose() {
    console.log(this.data)
    this.dialogRef.close();
  }

  onAction() {
    switch (this.data.action){
      case 'create':
        alert(this.actionService.create());
        break;
      case 'update':
        alert(this.actionService.update());
        break;
    }
    this.onClose()
  }
}
