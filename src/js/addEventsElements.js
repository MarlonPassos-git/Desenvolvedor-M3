import { showItemsScreen } from './showItemsScreen';
import { getDataFormFilters } from './getDataFormFilters.js';
import { getApiItems } from './getApiItems.js';

export function addEventsElements (TOT_ITEMS_PAGE) {
    
    const $moreItems = document.querySelector('.menu__moreItems');  
    const $orderSelect = document.querySelector('.menu__order')
    const $form = document.querySelector('.filters__form');
    const items_at_a_time = +localStorage.getItem('ITEMS_AT_A_TIME');
    const $wrapperPrices = document.querySelectorAll('.form__session--options input');
    let ultimoElementoMarcado = ''

    $moreItems.addEventListener('click',  () => {
        
        
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
        TOT_ITEMS_PAGE = items_at_a_time;
        showItemsScreen(TOT_ITEMS_PAGE)
    })

    $form.addEventListener('change', ()=> handleFiltersChange(TOT_ITEMS_PAGE, items_at_a_time))

    $wrapperPrices.forEach((input) => {

        input.addEventListener('click', (e)=> {
             const valorElemento = e.target.value
             if (ultimoElementoMarcado === valorElemento) {
                 e.target.checked = false
                 ultimoElementoMarcado = ''

                 TOT_ITEMS_PAGE = items_at_a_time;
                 handleFiltersChange(TOT_ITEMS_PAGE, items_at_a_time)

             }
             else {
                ultimoElementoMarcado = valorElemento
             }
            
        })
    })



    
}

async function handleFiltersChange (TOT_ITEMS_PAGE, items_at_a_time) {
    const filters = getDataFormFilters()
    const listItems = JSON.parse(localStorage.getItem('AllproductsList'));
    
    console.log(filters)

    const listItemsFiltered = listItems.filter(item => {
        if (filters.colors.length > 0) {
            if (!filters.colors.includes(item.color.toLowerCase())) return false
        }
        if (filters.sizes.length > 0) {
            
            const has = item.size.find(size => filters.sizes.includes(size.toLowerCase()))
           
            if (!has) return false
        }
        if (filters.price !== undefined) {
            const [minNumber, maxNumber] = filters.price.split('-')
            
            if (item.price < minNumber || item.price > maxNumber) return false
   
        }
        return true
    })

    await localStorage.setItem('productsList', JSON.stringify(listItemsFiltered));

    TOT_ITEMS_PAGE = items_at_a_time;
    showItemsScreen(TOT_ITEMS_PAGE)
} 



