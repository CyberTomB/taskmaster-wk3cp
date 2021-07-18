import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

export default class TasksController {

   isTaskChecked(id) {
      tasksService.isTaskChecked(id)
   }

   _tasksLog() {
      console.log(ProxyState.tasks)
   }
}