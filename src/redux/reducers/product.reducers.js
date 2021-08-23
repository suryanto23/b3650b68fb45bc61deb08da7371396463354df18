import { REQUEST, FAILED, SUCCESS_PRODUCT, FINISH_PRODUCT } from '../actions/product.actions'

const initialState = {
    productData : [],
    productDateData : [],
    isLoading : false,
    error: false
};

const product = (state = initialState, action) => {
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

        case SUCCESS_PRODUCT:
            return {
                ...state,
                productData: action.productData,
                isLoading: false,
            };
        case FINISH_PRODUCT:
            return {
                ...state,
                productDateData: action.data,
                isLoading: false,
            };

        default:
            return state;
    }
}

export default product;