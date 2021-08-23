import {combineReducers} from 'redux';

import cart from './cart.reducers';
import product from './product.reducers';

const rootReducer = combineReducers({
    product,
    cart
})

export default rootReducer