import { ProxyState } from "../AppState.js"

class ListsService {

   createList(rawList) {
      ProxyState.lists = [...ProxyState.lists, new List(rawList)]
   }

}

export const listsService = new ListsService()