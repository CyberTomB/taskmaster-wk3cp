import { ProxyState } from "../AppState.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

export default class StorageController {

   constructor() {
      loadState()
      ProxyState.on('lists', saveState)
      ProxyState.on('tasks', saveState)
   }
}