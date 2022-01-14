import { createProduct } from './createProduct';


export  function showItemsScreen(TOT_ITEMS_PAGE) {
    console.log('showItemsScreen')
    const $productlist = document.querySelector('.menu__produtsList')
    const listItems = JSON.parse(localStorage.getItem('productsList'));
    const totDados = listItems.length;
    const  products = [];
    const items_at_a_time = +localStorage.getItem('ITEMS_AT_A_TIME');

    if (TOT_ITEMS_PAGE > totDados + items_at_a_time) return 

    for (let i = 0; i < totDados; i++) {

        if (i >= TOT_ITEMS_PAGE) break;

        products.push(createProduct(listItems[i]))
    }

    $productlist.innerHTML = '';

    $productlist.append(...products)
    
}