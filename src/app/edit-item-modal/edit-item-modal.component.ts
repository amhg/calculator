import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BudgetItem} from '../../shared/models/budget-item.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {
  item: BudgetItem;
  message: string = "";

  constructor(
    private dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BudgetItem) {
      if(data) {
        this.item = data;
      }
  }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }
}
