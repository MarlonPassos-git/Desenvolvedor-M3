import { createProduct } from './createProduct';


export  function showItemsScreen(TOT_ITEMS_PAGE) {
    const $productlist = document.querySelector('.menu__produtsList')
    const listItems = JSON.parse(localStorage.getItem('productsList'));
    const totDados = listItems.length;
    const  products = [];

    for (let i = 0; i < totDados; i++) {

        if (i >= TOT_ITEMS_PAGE) break;

        products.push(createProduct(listItems[i]))
    }

    $productlist.innerHTML = '';

    for (let element of products) {
        $productlist.appendChild(element)
    }
}