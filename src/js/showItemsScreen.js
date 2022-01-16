import { createProduct } from './createProduct';

export  function showItemsScreen() {

    const totItemsPage = +localStorage.getItem('TOT_ITEMS_PAGE');
    const $productlist = document.querySelector('.menu__produtsList')
    const listItems = JSON.parse(localStorage.getItem('productsList'));
    const totDados = listItems.length;
    const  products = [];
    const items_at_a_time = +localStorage.getItem('ITEMS_AT_A_TIME');

    if (totItemsPage > totDados + items_at_a_time) return 

    for (let i = 0; i < totDados; i++) {

        if (i >= totItemsPage) break;

        products.push(createProduct(listItems[i]))
    }

    $productlist.innerHTML = '';
    $productlist.append(...products) 
}