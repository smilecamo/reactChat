
const ADD_GUN = 'add'
const REMOVE_GUN = 'remove'

// reducer

export function counter (state=0,action){
  switch(action.type){
    case ADD_GUN:
      return state + 1
    case REMOVE_GUN:
      return state - 1
    default:
      return 10
  }
}

export function add() {
  return {
    type: ADD_GUN
  }
}

export function remove() {
  return {
    type: REMOVE_GUN
  }
}
