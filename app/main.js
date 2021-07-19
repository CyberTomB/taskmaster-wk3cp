import ListsController from "./Controllers/ListsController.js";
import StorageController from "./Controllers/StorageController.js";
import TasksController from "./Controllers/TasksController.js";
import Tests from "./Utils/test.js";


class App {
  storage = new StorageController()
  listsController = new ListsController()
  tasksController = new TasksController()

  test = new Tests()
}

window["app"] = new App();
