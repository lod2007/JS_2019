import $ from 'jquery'

export const inputTodo=$('#todolist')
export const btnAdd=$('#btnAddTodo')
export const todolist=$('#todolistli')


//Это шаблонные строки через функции!!! епта!
export const todoItem=(todo,id)=> `
   <li>
   <button data-type="status" data-id="${id}" data-status="${todo.status}">${todo.status === 'open' ? 'закрыть' :' открыть'}</button>
     <span class="todo ${todo.status==='close' ? 'todo-close' : ''}">${todo.description}</span> 
   <button data-type="remove" data-id="${id}">Удалить</button>

   </li>
 `
