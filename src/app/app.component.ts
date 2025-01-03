import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  highlighted: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgFor, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: TodoItem[] = [];
  taskForm: FormGroup = new FormGroup({
    task:new FormControl("",[Validators.required , Validators.minLength(4)])
  });

  addTask(): void {
    if (this.taskForm.valid) {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: this.taskForm.value.task,
        completed: false,
        highlighted: false
      };
      this.todoList.push(newTodoItem);
      this.taskForm.reset();
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
