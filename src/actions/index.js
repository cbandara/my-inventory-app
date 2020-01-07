export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const STORE_PRODUCT_DATA = "STORE_PRODUCT_DATA";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";



export const registerUser = user => (dispatch) => {

  fetch(API_URL + `/users/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .then((data) => {

      alert("registration Successful");
      window.location.href = "/login"



    });
};

export const loginUser = user => (dispatch) => {
  fetch(API_URL + `/auth/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .then((data) => {
      window.localStorage.setItem('auth-token', data.authToken)
      window.location.href = '/';

    });
};



export const getProducts = () => (dispatch) => {

  fetch(API_URL + `/products`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('auth-token')}`
    },
  })
    .then((res) => res.json())
    .then((data) => {

      dispatch({
        type: GET_PRODUCTS,
        products: data.products
      })

    });
};

export const addProduct = product => (dispatch) => {

  fetch(API_URL + `/products`, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('auth-token')}`
    }
  })
    .then((res) => res.json())
    .then((data) => {

      dispatch({
        type: ADD_PRODUCT,
        product: data.newProduct
      })

    });
};

export const deleteProduct = product => (dispatch) => {

  fetch(API_URL + `/products/${product.id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('auth-token')}`
    }
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: DELETE_PRODUCT,
        id: product.id
      });
    });
}

export const editProduct = (id, product) => (dispatch) => {

  fetch(API_URL + `/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('auth-token')}`
    }
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: EDIT_PRODUCT,
        product: data.product
      });
    });
}



export const storeProductData = product => ({
  type: STORE_PRODUCT_DATA,
  product
});