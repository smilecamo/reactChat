const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const defaultstate={
  islogin: false
}
export function Auth (state=defaultstate,action){
  switch(action.type){
    case LOGIN:
      return {
        islogin: true
      }
    case LOGOUT:
      return {
        islogin: false
      }
    default:
      return state
  }
}

export function login (){
  return {type:LOGIN}
}
export function logout (){
  return {type:LOGOUT}
}