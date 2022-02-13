import axios from 'axios'
import * as actionTypes from '../constants/productConstant'

const url = '';

export const getProducts = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${url}/products`);
        dispatch({type:actionTypes.GET_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_PRODUCT_FAIL,payload:error.response})
         
    }
}
export const  getProductDetails = (id) => async (dispatch) =>{
    try {
         
        const {data} = await axios.get(`${url}/product/${id}`);
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,payload:data});
    } catch (error) {
        console.log("hello");
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL,payload:error.response})
    }
};