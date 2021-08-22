import { REQUEST, FAILED, SUCCESS_CART, COUNTER } from '../actions/cart.actions'

const initialState = {
    counter : 0,
    totalPrice : 0,
    isLoading : false,
    error: false
};

const cart = (state = initialState, action) => {
    switch (action.type){

        case REQUEST: 
            return {
                ...state,
                isLoading: true,
                editSuccess : false,
            };

        case FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
            };

        case SUCCESS_CART:
            return {
                ...state,
                cartItem: action.cartItem,
                totalPrice: action.totalPrice,
                isLoading: false,
            };

            case COUNTER:
                return {
                    ...state,
                    counter: action.data,
                    // totalPrice: action.totalPrice,
                    isLoading: false,
                };

        default:
            return state;
    }
}

export default cart;