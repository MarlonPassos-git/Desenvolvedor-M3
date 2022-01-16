import { showItemsScreen } from './showItemsScreen';
import { getDataFormFilters } from './getDataFormFilters.js';
import { getApiItems } from './getApiItems.js';

export function addEventsElements (TOT_ITEMS_PAGE) {
    
    const $moreItems = document.querySelector('.menu__moreItems');  
    const $orderSelect = document.querySelector('.menu__order')
    const $formFilters = document.querySelector('.filters__form');
    const items_at_a_time = +localStorage.getItem('ITEMS_AT_A_TIME');
    const $wrapperPrices = document.querySelectorAll('.form__session--options input');
    const $wrapperColors = document.querySelector('.form__session--colors .form__session--options');
    const $buttonAllColors = document.querySelector('.form__session--button')
    const $buttonFilter = document.querySelector('.menu__bottom--filter');
    const $buttonOrder = document.querySelector('.menu__bottom--ordenar');
    const $buttonModalClose = document.querySelector('.modal__buttonClosed');
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

    $formFilters.addEventListener('change', ()=> handleFiltersChange(TOT_ITEMS_PAGE, items_at_a_time, '.filters__form'))

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

    $buttonAllColors.addEventListener('click', (event) => {
        
        event.preventDefault()
        
        
        $wrapperColors.classList.remove('showFiveItems')

        $buttonAllColors.hidden = true

    })

    $buttonFilter.addEventListener('click', (event) => {
        pageLock()
        toggleModal()
        fillModal('filtrar', $formFilters)
    })
    
    $buttonOrder.addEventListener('click', (event) => {
        pageLock()
        toggleModal()
        fillModal('Ordernar', $orderSelect, TOT_ITEMS_PAGE, items_at_a_time )
    })

    $buttonModalClose.addEventListener('click', (event) => {
        toggleModal()
        pageLock()
    })
}

async function handleFiltersChange (TOT_ITEMS_PAGE, items_at_a_time, cssSelector) {
    const filters = getDataFormFilters(cssSelector)
    const listItems = JSON.parse(localStorage.getItem('AllproductsList'));

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

    console.log(listItemsFiltered)

    await localStorage.setItem('productsList', JSON.stringify(listItemsFiltered));

    TOT_ITEMS_PAGE = items_at_a_time;
    showItemsScreen(TOT_ITEMS_PAGE)
} 



function toggleModal () {
    const $modal = document.querySelector('#modal');
    
    $modal.classList.toggle('modal');
}

function fillModal (title, content, TOT_ITEMS_PAGE, items_at_a_time) {
    const $modalTitle = document.querySelector('.modal__title');
    const $modalContent = document.querySelector('.modal__content');
    const $cloneContent = content.cloneNode(true);
    $modalTitle.innerHTML = title;

    console.log($modalContent)

    if (title == 'Ordernar') AddOrderEventsContent($cloneContent)
    if (title == 'filtrar') AddFilterEventsContent($cloneContent, TOT_ITEMS_PAGE, items_at_a_time)
    

    $modalContent.innerHTML = '';
    $modalContent.appendChild($cloneContent);
}

function pageLock() {
    const $body = document.querySelector('body');
    
    $body.classList.toggle('lock');
}

function sortList (event) {
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
            
            showItemsScreen(9)
}

function AddOrderEventsContent(content, TOT_ITEMS_PAGE, items_at_a_time){
    const $select = content.querySelector('select')
    const $optionDisabled = $select.querySelector('option[disabled]')

    $optionDisabled.remove()
    $select.size = 3;

    content.addEventListener('click', (event) => {
        
        sortList (event)
        toggleModal()
        pageLock()
    })
}

function AddFilterEventsContent(content, TOT_ITEMS_PAGE, items_at_a_time) {
    content.addEventListener('click', ()=> {
        handleFiltersChange(TOT_ITEMS_PAGE, items_at_a_time, '#modal form')
    
        
    })

    
}