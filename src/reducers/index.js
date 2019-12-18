import { ADD_PRODUCT } from "../actions/index.js";

const initialState = {
  productList: [
    {
      id: 3211,
      img:
        "https://imgprod65.hobbylobby.com/sys-master/migrated/h06/h48/h00/8998682099742/422790_3[5].jpg"
    },
    {
      id: 1112,
      img:
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
  if (action.type === ADD_PRODUCT) {
    return Object.assign({}, state, {
      productList: [...state.productList, action.product]
    });
  }

  return state;
};
