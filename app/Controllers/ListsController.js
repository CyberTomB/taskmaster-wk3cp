import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";

function _draw() {
   let template = ''
   let lists = ProxyState.lists
   lists.forEach(list => template += list.Template)
   document.getElementById('lists').innerHTML = template
}
export default class ListsController {

   constructor() {
      ProxyState.on('lists', _draw)
      ProxyState.on('tasks', _draw)
      _draw()
   }

   createList() {
      event.preventDefault()
      let form = event.target
      let rawList = {
         name: form.name.value,
         color: form.color.value
      }
      listsService.createList(rawList)
      form.reset()
   }

   removeTask(taskId) {
      listsService.removeTask(taskId)
   }

   removeList(id) {
      listsService.removeList(id)
   }
}