import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";

function _draw() {
   console.log('I heard that')
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

   addTask(listId) {
      event.preventDefault()
      let form = event.target
      let rawTask = {
         name: form.task.value,
         listId: listId,
      }
      listsService.addTask(rawTask)
      form.reset()
   }
   removeTask(taskId) {
      if (window.confirm("Are you sure you want to delete this?")) {
         listsService.removeTask(taskId)
      }
   }

   removeList(id) {
      if (window.confirm("Are you sure you want to delete this?")) {
         listsService.removeList(id)
      }
   }

   _listsLog() {
      console.log(ProxyState.lists)
   }
}