import { generateId } from "../Utils/GenerateId.js"

export default class List {

   constructor(name, id = generateId()) {
      this.name = name
      this.id = id
   }

   get Template() {
      return /*html*/ `
      <div class="col-4 mt-3" id="${this.id}">
         <div class="bg-light rounded shadow-light">
            <div
            class="d-flex justify-content-around align-items-center rounded-top text-light text-center p-3 bg-dark">
               <h3>${this.name}</h3>
               <i class="mdi mdi-delete action text-danger" title="delete list"></i>
            </div>
            <div class="p-2 ">
               <p><b>Tasks: </b></p>
               <ul class="bg-gray lighten-40 p-2 pl-4">
                  <li>TASK 1</li>
                  <li>TASK 2</li>
                  <li>TASK 3</li>
                  <li>TASK 4</li>
               </ul>
            </div>
            <form onsubmit="">
               <input type="text" name="task" placeholder="Add task..." required maxlength="20">
               <button type="submit" class="btn btn-outline-success">+</button>
            </form>
         </div>
      </div>
   `
   }
}