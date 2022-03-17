import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetItem} from '../../shared/models/budget-item.model';
import {EditItemModalComponent} from '../edit-item-modal/edit-item-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onCardClicked(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        // this.budgetItems[this.budgetItems.indexOf(item)] = result;
        this.update.emit({
          old: item,
          new: result
        });
      }
    });

  }

  onDeleteButtonClicked(item: BudgetItem) {
    console.log('onDeleteButtonClicked')
    this.delete.emit(item);
  }
}

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}

