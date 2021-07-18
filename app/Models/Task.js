import { generateId } from "../Utils/GenerateId.js";

export default class Task {
   constructor({ name, listId, id = generateId() }) {
      this.id = id
      this.listId = listId
      this.name = name
      this.checked = false
   }


   get Template() {
      return `
      <input type="checkbox" id="${this.id}" name="${this.name}" onclick="app.tasksController.isTaskChecked('${this.id}')" ${this.checked ? 'checked' : ''}>
      <label for="${this.name}">${this.name}
         <i class="btn mdi mdi-delete" onclick="app.listsController.removeTask('${this.id}')">
      </i></label>
      <br>
      `
   }
}