import { tasksService } from "../Services/TasksService.js";

export default class TasksController {

   isTaskChecked(id) {
      tasksService.isTaskChecked(id)
   }
}