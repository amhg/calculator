import { Component, OnInit } from '@angular/core';
import {BudgetItem} from '../../shared/models/budget-item.model';
import {UpdateEvent} from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  updateItem(updateEvent: UpdateEvent){
    console.log(` old:  ${updateEvent.old.amount}, new: ${updateEvent.new.amount}`)
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    //update total budget
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;

  }

  deleteItem(deleteItem: BudgetItem) {
    let index = this.budgetItems.indexOf(deleteItem);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= deleteItem.amount;
  }
}
