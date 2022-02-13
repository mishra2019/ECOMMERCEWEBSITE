import axios from 'axios';
import * as actionTypes from '../constants/cartConstant';

const URL = '';


export const addToCart =  (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({type:actionTypes.ADD_TO_CART,payload:data});
    } catch (error) {
        console.log("Error while calling api in cart actions");
    }
}

export const removeFromcart = (id) => (dispatch) => {
    dispatch({type:actionTypes.REMOVE_FROM_CART,payload:id})
}