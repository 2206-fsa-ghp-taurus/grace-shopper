import axios from 'axios'
// action types 
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'


// action creators 
export const setSingleProduct = (product) => ({
  type: SET_SINGLE_PRODUCT,
  product
});


// thunk creators

export const fetchSingleProduct = (id) => async (dispatch) =>{
  const {data} = await axios.get(`/api/products/${id}`)
  dispatch(setSingleProduct(data));
}

const initialState = {}

const singleProductReducer = (state = initialState, action) =>{
  switch(action.type){
    case SET_SINGLE_PRODUCT: 
      return action.product
    default:
      return state
  }
}

export default singleProductReducer