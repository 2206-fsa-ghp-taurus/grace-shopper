import axios from "axios";


const SET_PRODUCTS = 'SET_PRODUCTS'


export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products
  });




export const fetchProducts = () => {
  return async (dispatch) => {
    try {
    const {data} = await axios.get('/api/products')
    dispatch(setProducts(data))
    } catch (error) {
      console.error(error)
    }
  }
};


const initialState = []

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    default:
      return state

  }
}