import $ from 'jquery'

import todoService from './TODOServise'

import {
   todoItem,
   inputTodo,
   btnAdd,
   todolist
} from './const'

function renderTodoList(list,conteiner) {
   conteiner.html('')
   list.map((todo, id)=>{
      const todoComponent=todoItem(todo,id)
      conteiner.html(conteiner.html()+todoComponent)
   })

   $('button[data-type="status"]').click((e)=>{
     const id=$(e.currentTarget).attr('data-id')
     const status=$(e.currentTarget).attr('data-status') === 'open' ? 'close' : 'open'
     renderTodoList(todoService.changeStatus(id,status),conteiner) //что поменяли тут же отрисовываем
   })

   $('button[data-type="remove"]').click((e)=>{
      const id=$(e.currentTarget).attr('data-id') 
      renderTodoList(todoService.remove(id),conteiner) //что поменяли тут же отрисовываем

   })



}

$(document).ready(()=>{
  renderTodoList(todoService.todolist,todolist)

})