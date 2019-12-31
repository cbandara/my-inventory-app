import { createStore, applyMiddleware } from "redux";
// import { reducer as formReducer } from "redux-form";
import thunk from 'redux-thunk';
import { productReducer } from "./reducers";

const middlewares = [thunk]

// Do I need form reducer here?
// Combine reducers breaks the rest of the program

export default createStore(
  productReducer,
  applyMiddleware(...middlewares)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export default createStore(
//   combineReducers({
//     form: formReducer,
//     product: productReducer
//   })
// )
