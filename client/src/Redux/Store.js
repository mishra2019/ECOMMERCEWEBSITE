import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductDetailsReducer,getProductsReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer'
const reducer = combineReducers({
    getProducts : getProductsReducer,
    getProductDetails : getProductDetailsReducer,
    addToCart:cartReducer

})
const middleware = [thunk];
const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    
)

export default Store;