
export function getProducts(page , size) {

    const products = [
        {
            name:"product1_"+page,
            image:'https://material-ui.com/static/images/cards/paella.jpg'
        },
        {
            name:'product2_'+page,
            image:'https://material-ui.com/static/images/cards/paella.jpg'
        },
        {
            name:'product3_'+page,
            image:'https://material-ui.com/static/images/cards/paella.jpg'
        },
        {
            name:'product4_'+page,
            image:'https://material-ui.com/static/images/cards/paella.jpg'
        },
        {
            name:'product5_'+page,
            image:'https://material-ui.com/static/images/cards/paella.jpg'
        },
        {
            name:'product6_'+page,
            image:'https://material-ui.com/static/images/cards/paella.jpg'
        },
        {
            name:'product7_'+page,
            image:'https://material-ui.com/static/images/cards/paella.jpg'
        },
        {
            name:'product8_'+page,
            image:'https://material-ui.com/static/images/cards/paella.jpg'
        },
        {
            name:'product9_'+page,
            image:'https://material-ui.com/static/images/cards/paella.jpg'
        },
        {
            name:'product10_'+page,
            image:'https://material-ui.com/static/images/cards/paella.jpg'
        },
    ];
    return {
        type: 'GET_PRODUCTS',
        payload: {
            products: products,
            currentPage: page,
            lastPage:10
        }
    }
}