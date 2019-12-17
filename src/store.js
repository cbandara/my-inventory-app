import { createStore } from "redux";
// import {reducer as formReducer} from 'redux-form'
import { productReducer } from "./reducers";

// Do I need form reducer here?
// Combine reducers breaks the rest of the program

export default createStore(productReducer);

// export default createStore(
//   combineReducers({
//       form: formReducer,
//       product: productReducer
//   })
// )