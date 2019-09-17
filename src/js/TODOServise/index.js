const data =[
    {   description:'Купить хлеб',
        status:'open'
    },
    {   description:'Завезти сумку',
        status:'close'
    },
    {   description:'Почесать ..цо',
        status:'open'
    }
]

class TodoServise {
    constructor(){
        this.todolist=[...data] //копирует данные 
    }
    add(todo) {
      this.todolist.push(todo)  
      return this.todolist
    }
    remove(id){
      this.todolist.splice(id,1) 
      return this.todolist  
    }
    changeStatus(id,status){
        this.todolist[id].status=status
        return this.todolist
    }
}

export default new TodoServise() //патерн синглтон.