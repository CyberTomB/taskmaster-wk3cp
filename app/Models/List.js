import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {

   constructor({ name, color, id = generateId() }) {
      this.name = name.toUpperCase()
      this.color = color
      this.id = id
      this.tasksId = `tasks-${id}`
   }

   get Template() {
      return /*html*/ `
      <div class="col-4 mt-3" id="${this.id}">
         <div class="bg-light rounded shadow-light">
            <div
            class="d-flex justify-content-around align-items-center rounded-top text-light text-center p-3" style="background-color: ${this.color}">
               <h5>${this.name}</h5>
               <i class="mdi mdi-delete btn text-danger" title="delete list" onclick="
               app.listsController.removeList('${this.id}')"></i>
            </div>
            <div class="p-2">
               <p><b>Tasks: </b></p>
               <form class="p-2 pl-4" id="${this.tasksId}">
                  ${this.MyTasks}
               </form>
            </div>
            <form onsubmit="">
               <input type="text" name="task" placeholder="Add task..." required maxlength="20">
               <button type="submit" class="btn btn-outline-success">+</button>
            </form>
         </div>
      </div>
   `
   }

   get MyTasks() {
      let template = ''
      let tasks = ProxyState.tasks.filter(task => task.listId === this.id)
      tasks.forEach(t => {
         template += t.Template
      })
      if (!template) {
         template += "No Tasks"
      }
      return template
   }
}