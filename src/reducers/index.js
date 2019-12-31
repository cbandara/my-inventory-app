import { ADD_PRODUCT, EDIT_PRODUCT, STORE_PRODUCT_DATA, DELETE_PRODUCT, GET_PRODUCTS } from "../actions/index.js";

const initialState = {
  // add edit form data
  editFormData: {},
  productList: [
    {
      id: 3211,
      name: "red t-shirt",
      image:
        "https://imageprod65.hobbylobby.com/sys-master/migrated/h06/h48/h00/8998682099742/422790_3[5].jpg"
    },
    {
      id: 1112,
      name: "blue t-shirt",
      image:
        "https://cdn.ccs.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/e/n/enjoi-doesn-t-fit-t-shirt-royal-blue-2.1506663643.jpg"
    }
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
