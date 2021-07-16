import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"

class ListsService {

   createList(rawList) {
      ProxyState.lists = [...ProxyState.lists, new List(rawList)]
   }

   removeTask(taskId) {
      ProxyState.tasks = ProxyState.tasks.filter(task => task.id != taskId)
   }

}

export const listsService = new ListsService()