export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS_CART = "SUCCESS_CART";
export const FINISH = "FINISH";
export const COUNTER = "COUNTER";

export const request = () => {
    return {
        type: REQUEST,
    };
};

export const success = (data , allPrice) => {
    return {
        type: SUCCESS_CART,
        cartItem: data,
        totalPrice : allPrice
    };
};

export const counter = (data) => {
    return {
        type: COUNTER,
        data: data
    };
};

export const finish = (data) => {
    return {
        type: FINISH,
        data : data
    };
};

export const failed = (err) => {
    return {
        type: FAILED,
        err,
    };
};

export const getCartAction = () => (dispatch) => { 
    let myCartItem = JSON.parse(localStorage.getItem("items")) 
    if(myCartItem){
        dispatch(success(myCartItem , 0))
        dispatch(sumPriceAction())
    } 
};

export const addToCartAction = (itemData) => (dispatch) => { 
    let items = []
    let localItemData = JSON.parse(localStorage.getItem("items")) 
    if (localItemData) items.push(...localItemData)
    items.push(itemData)
    localStorage.setItem("items" , JSON.stringify(items))
    dispatch(getCounterAction())
    dispatch(sumPriceAction())
};


export const getCounterAction = () => (dispatch) => { 
    let myCartItem = JSON.parse(localStorage.getItem("items")) 
    if(myCartItem)
        dispatch(counter(myCartItem.length))
};

export const sumPriceAction = () => (dispatch) => {    
    let myCartItem = JSON.parse(localStorage.getItem("items")) 
    let totalPrice =  myCartItem.reduce(function(a,b){return a + b.price},0)
    dispatch(success(myCartItem,totalPrice))
};