import { createStore } from "redux";
const initialState = {
  dataBlogs: [],
  name : "Dimas"
}
const reducer = (state = initialState, action) => {
  if(action.type === "UPDATE_DATA_BLOG"){
    return {
      ...state,
      dataBlogs: action.payload
    }
  }
  if(action.type === "UPDATE_NAME"){
    return {
      ...state,
      name : "dimasupdated"
    }
  }
  return state
}
const store = createStore(reducer)

export default store