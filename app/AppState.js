import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import List from "./Models/List.js"
import Task from "./Models/Task.js"

class AppState extends EventEmitter {
  lists = [
    new List({
      name: 'new list',
      color: '#000000',
      id: 'example'
    })
  ]

  tasks = [
    new Task({
      name: 'eat food',
      listId: 'example',
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
