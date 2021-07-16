import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService {

   createList(rawList) {
      ProxyState.lists = [...ProxyState.lists, new List(rawList)]
   }

   removeList(id) {
      ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
   }

   addTask(rawTask) {
      ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
   }
   removeTask(taskId) {
      ProxyState.tasks = ProxyState.tasks.filter(task => task.id != taskId)
   }


}

export const listsService = new ListsService()