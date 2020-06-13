import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray=[];
  addTodo(value) {
    this.todoArray.push(value)
    console.log(this.todoArray)
  }
  title = 'todo-app';
  
  /*delete item*/
  deleteItem(todo) {
    for(let i=0; i <= this.todoArray.length; i++){
      if(todo==this.todoArray[i]) {
        this.todoArray.splice(i, 1)
      }
    }
  }

  // submit form
  todoSubmit(value:any){
     console.error(value)
  }
}
