import { generateId } from "../Utils/GenerateId.js";

export default class Task {
   constructor({ name, listId, id = generateId() }) {
      this.id = id
      this.listId = listId
      this.name = name
   }


   get Template() {
      return `
      <input type="checkbox" id="${this.id}" name="${this.name}">
      <label for="${this.name}">${this.name}</label><br>
      `
   }
}