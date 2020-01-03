import { ADD_PRODUCT, EDIT_PRODUCT, STORE_PRODUCT_DATA, DELETE_PRODUCT, GET_PRODUCTS } from "../actions/index.js";

const initialState = {
  // add edit form data
  editFormData: {},
  productList: [
  ]
};

export const productReducer = (state = initialState, action) => {
  if (action.type === ADD_PRODUCT) {
    return Object.assign({}, state, {
      productList: [...state.productList, action.product]
    });
  }

  if (action.type === GET_PRODUCTS) {
    return Object.assign({}, state, {
      productList: action.products
    });
  }

  if (action.type === EDIT_PRODUCT) {
    //Use map to find product matchx
    const productList = state.productList.map(product => {
      if (product._id === action.product._id) {
        return action.product;
      }
      else {
        return product;
      }
    })
    return Object.assign({}, state, {
      productList
    });
  }
  if (action.type === STORE_PRODUCT_DATA) {
    return Object.assign({}, state, {
      editFormData: action.product
    });
  }
  if (action.type === DELETE_PRODUCT) {
    console.log(action, state.productList)
    return Object.assign({}, state, {
      productList: state.productList.filter(element => element._id !== action.id)
    });
  }

  // 

  return state;
};
