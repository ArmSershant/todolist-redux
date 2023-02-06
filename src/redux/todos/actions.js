// import { makeComplete, makeActive } from "./actions"
export function makeComplete(id) {
  return {
    type: "COMPLETE_TASK",
    payload: id,
  }
}
export function makeActive(id) {
  return {
    type: "ACTIVATE_TASK",
    payload: id,
  }
}
export function addToDo(text) {
  return {
    type: "ADD_NEW_TASK",
    payload: text,
  }
}
export function deleteToDo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  }
}