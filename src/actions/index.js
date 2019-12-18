export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const STORE_PRODUCT_DATA = "STORE_PRODUCT_DATA"

export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
});

export const deleteProduct = product => ({
  type: DELETE_PRODUCT,
  product
});

export const editProduct = product => ({
  type: EDIT_PRODUCT,
  product
});

export const storeProductData = product => ({
  type: STORE_PRODUCT_DATA,
  product
});