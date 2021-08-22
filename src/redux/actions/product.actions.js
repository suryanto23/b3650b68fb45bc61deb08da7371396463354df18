export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS_PRODUCT = "SUCCESS_PRODUCT";
export const FINISH_PRODUCT = "FINISH_PRODUCT";

export const request = () => {
    return {
        type: REQUEST,
    };
};

export const success = (data) => {
    return {
        type: SUCCESS_PRODUCT,
        productData: data
    };
};

export const failed = (err) => {
    return {
        type: FAILED,
        err,
    };
};

export const finish = (data) => {
    return {
        type: FINISH_PRODUCT,
        data: data,
    };
};

let DUMMY_PRODUCT = [{
    image : "https://images.unsplash.com/photo-1543340904-991f3751a30f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80",
    title : "roasted chicken with scrambled egg",
    desc : "by Kulina . Uptown Lunch",
    rating : 3,
    price : 35000
},
{
    image : "https://images.unsplash.com/photo-1565192259022-0427b058f372?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    title : "fish and chip with homemade tartar sauce",
    desc : "by Kulina . Uptown Lunch",
    rating : 4.5,
    price : 55000
}
]

let DUMMY_DATE = [{
    day : "senin",
    date : "11",
    month : "maret",
    year : "2019",
    status : true
},
{
    day : "selasa",
    date : "12",
    month : "maret",
    year : "2019",
    status : true
},
{
    day : "rabu",
    date : "13",
    month : "maret",
    year : "2019",
    status : true
},
{
    day : "kamis",
    date : "14",
    month : "maret",
    year : "2019",
    status : true
},
{
    day : "jumat",
    date : "15",
    month : "maret",
    year : "2019",
    status : true
},
{
    day : "sabtu",
    date : "16",
    month : "maret",
    year : "2019",
    status : false
},
{
    day : "minggu",
    date : "17",
    month : "maret",
    year : "2019",
    status : false
},
{
    day : "senin",
    date : "18",
    month : "maret",
    year : "2019",
    status : true
},
{
    day : "selasa",
    date : "19",
    month : "maret",
    year : "2019",
    status : true
},
{
    day : "rabu",
    date : "20",
    month : "maret",
    year : "2019",
    status : true
},
{
    day : "kamis",
    date : "21",
    month : "maret",
    year : "2019",
    status : true
},
{
    day : "jumat",
    date : "22",
    month : "maret",
    year : "2019",
    status : true
},
{
    day : "sabtu",
    date : "23",
    month : "maret",
    year : "2019",
    status : false
},
{
    day : "minggu",
    date : "24",
    month : "maret",
    year : "2019",
    status : false
}

]

export const getProductAction = () => (dispatch) => { 
    dispatch(request)
    dispatch(success(DUMMY_PRODUCT))
};

export const getDateAction = () => (dispatch) => { 
    dispatch(request)
    dispatch(finish(DUMMY_DATE))
};
