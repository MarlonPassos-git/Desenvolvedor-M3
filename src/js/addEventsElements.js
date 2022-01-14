import { showItemsScreen } from './showItemsScreen';
import { getDataFormFilters } from './getDataFormFilters.js';
import { getApiItems } from './getApiItems.js';

export function addEventsElements (TOT_ITEMS_PAGE) {
    
    const $moreItems = document.querySelector('.menu__moreItems');  
    const $orderSelect = document.querySelector('.menu__order')
    const $form = document.querySelector('.filters__form');

    $moreItems.addEventListener('click',  () => {
        const items_at_a_time = +localStorage.getItem('ITEMS_AT_A_TIME');
        console.log(TOT_ITEMS_PAGE)
        TOT_ITEMS_PAGE += items_at_a_time;
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

    $form.addEventListener('change', async ()=> {
        const filters = getDataFormFilters()
        const listItems = JSON.parse(localStorage.getItem('AllproductsList'));
        
        const listItemsFiltered = listItems.filter(item => {
            if (filters.colors.length > 0) {
                if (!filters.colors.includes(item.color.toLowerCase())) return false
            }
            if (filters.sizes.length > 0) {
                if (!filters.sizes.includes(item.size.toLowerCase())) return false
            }
            if (filters.price.length > 0) {
                if (!filters.price.includes(item.price.toLowerCase())) return false
            }
            return true
        })
        console.log(listItemsFiltered)

        await localStorage.setItem('productsList', JSON.stringify(listItemsFiltered));

        TOT_ITEMS_PAGE = 3;
        showItemsScreen(3)
    } )



    
}



