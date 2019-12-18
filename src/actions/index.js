export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
});

export const deleteProduct = product => ({
  type: DELETE_PRODUCT,
  product
});