
const productsReducer = (state = {list:[], currentPage:0, lastPage :0}, action) =>{
    switch(action.type) {
        case "GET_PRODUCTS":{
            return {
                list: action.payload.products,
                currentPage: action.payload.currentPage,
                lastPage: action.payload.lastPage
            };

        }

        default: {
            return state;
        }
    }
};

export default productsReducer;