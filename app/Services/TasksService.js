import { ProxyState } from "../AppState.js"

class TasksService {

   isTaskChecked(id) {
      let task = ProxyState.tasks.find(task => task.id == id)
      task.checked = document.getElementById(task.id).checked
      console.log('check status:', task.checked)
      ProxyState.tasks = ProxyState.tasks
   }
}

export const tasksService = new TasksService()