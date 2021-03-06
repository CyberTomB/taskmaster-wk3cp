import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";

export function saveState() {
   localStorage.setItem('TasksMasterList', JSON.stringify({
      lists: ProxyState.lists,
      tasks: ProxyState.tasks
   }))
   console.log('saved state', ProxyState)
}

export function loadState() {
   let data = JSON.parse(localStorage.getItem('TasksMasterList'))
   console.log(data)
   if (data != null) {
      ProxyState.lists = data.lists.map(l => new List(l))
      ProxyState.tasks = data.tasks.map(t => new Task(t))
   }

}