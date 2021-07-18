import ListsController from "./Controllers/ListsController.js";
import StorageController from "./Controllers/StorageController.js";
import TasksController from "./Controllers/TasksController.js";
import Tests from "./Utils/test.js";


class App {
  listsController = new ListsController()
  tasksController = new TasksController()

  test = new Tests()
  storage = new StorageController()
}

window["app"] = new App();
