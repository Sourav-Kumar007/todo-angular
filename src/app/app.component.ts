import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {  CommonModule } from '@angular/common';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  highlighted: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: TodoItem[] = [];
  newTask: string = '';

  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false,
        highlighted: false 
      };
      this.todoList.push(newTodoItem);
      this.newTask = '';
    }
  }

  toggleHighlight(todoItem: TodoItem): void {
    todoItem.highlighted = !todoItem.highlighted;
  }

  toggleComplete(todoItem: TodoItem): void {
    todoItem.completed = !todoItem.completed;
  }

  trackById(index: number, item: TodoItem): number {
    return item.id;
  }
}
