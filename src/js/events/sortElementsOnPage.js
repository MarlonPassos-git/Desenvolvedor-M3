import { showItemsScreen } from "../showItemsScreen";

const rulesOrder = {
    ['menor_preco']: (a, b) => a.price - b.price,
    ['maior_preco']: (a, b) => b.price - a.price,
    ['mais_recentes']: (a, b) => {
        const c = new Date(a.date.replace(/\-/g, ','))
        const d = new Date(b.date.replace(/\-/g, ','))

        return d - c
    },
}

export function sortElementsOnPage(event) {
    const typeOrder = event.target.value;
        const productlist = JSON.parse(localStorage.getItem('productsList'));
        const items_at_a_time = +localStorage.getItem('ITEMS_AT_A_TIME');
        
        const productslistOrdered = productlist.sort(rulesOrder[typeOrder])

        localStorage.setItem('productsList', JSON.stringify(productslistOrdered));
        localStorage.setItem('TOT_ITEMS_PAGE', items_at_a_time);
        showItemsScreen()
}