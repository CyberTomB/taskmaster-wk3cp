import { ProxyState } from "../AppState.js";

function _draw() {
   let template = ''
   let lists = ProxyState.lists
   lists.forEach(list => template += list.Template)
   document.getElementById('lists').innerHTML = template
}
export default class ListsController {

   constructor() {
      ProxyState.on('lists', _draw)
      _draw()
   }
}