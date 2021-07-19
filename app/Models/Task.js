import { generateId } from "../Utils/GenerateId.js";

export default class Task {
   constructor({ name, listId, id = generateId(), checked }) {
      this.id = id
      this.listId = listId
      this.name = name
      this.checked = checked
   }


   get Template() {
      return `
      <input type="checkbox" id="${this.id}" name="${this.name}" onclick="app.tasksController.isTaskChecked('${this.id}')" ${this.checked ? 'checked' : ''}>
      <label for="${this.name}">${this.checked ? '<s>' : ''}${this.name}${this.checked ? '</s>' : ''}
         <i class="btn mdi mdi-delete" onclick="app.listsController.removeTask('${this.id}')">
      </i></label>
      <br>
      `
   }
}