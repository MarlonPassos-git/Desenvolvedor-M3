import { showItemsScreen } from './showItemsScreen';
import { getDataFormFilters } from './getDataFormFilters.js';

export function addEventsElements (TOT_ITEMS_PAGE) {
    
    const $moreItems = document.querySelector('.menu__moreItems');  
    const $orderSelect = document.querySelector('.menu__order')
    const $form = document.querySelector('.filters__form');

    $moreItems.addEventListener('click',  () => {
        TOT_ITEMS_PAGE += 3;
        showItemsScreen(TOT_ITEMS_PAGE)
    })

    $orderSelect.addEventListener('change', (event) => {
        const typeOrder = event.target.value;
        const productlist = JSON.parse(localStorage.getItem('productsList'));
        const rulesOrder = {
            ['menor_preco']: (a, b) => a.price - b.price,
            ['maior_preco']: (a, b) => b.price - a.price,
            ['mais_recentes']: (a, b) => {
                const c = new Date(a.date.replace(/\-/g, ','))
                const d = new Date(b.date.replace(/\-/g, ','))

                return d - c
            },
        }
        const productslistOrdered = productlist.sort(rulesOrder[typeOrder])

        localStorage.setItem('productsList', JSON.stringify(productslistOrdered));
        TOT_ITEMS_PAGE = 3;
        showItemsScreen(TOT_ITEMS_PAGE)
    })

    $form.addEventListener('change', getDataFormFilters)



    
}



