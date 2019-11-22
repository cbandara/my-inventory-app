import { createStore } from "redux";

import { productReducer } from "./reducers";

export default createStore(productReducer);
