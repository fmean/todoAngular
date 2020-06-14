import { Component } from '@angular/core';
import { trigger, animate, style, transition, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger("moveInLeft",[
       transition("void=> *",[style({transform:"translateX(300px)"}),
         animate(200,keyframes([
          style({transform:"translateX(300px)"}),
          style({transform:"translateX(0)"})
  
           ]))]),
 
 
           transition("*=>void",[style({transform:"translateX(0px)"}),
         animate(100,keyframes([
          style({transform:"translateX(0px)"}),
          style({transform:"translateX(300px)"})
  
           ]))])
      
      ])
 
   ]
})

export class AppComponent {
  todoArray = [];

  // submit form by pressing Enter
  todoPreSubmit(value) {
    if (value && value.todo) {      
      this.todoSubmit(value.todo);
    } else {
      this.todoSubmit("");
    }
  }

  // submit form by 'Add' button
  todoSubmit(value:any){
    if(value !== "" && value !== null) {
      this.todoArray.push(value)
      console.log(this.todoArray)
    } else {
      alert('Field required!')
    }
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

  
}