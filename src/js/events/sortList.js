import { showItemsScreen } from "../showItemsScreen";

export function sortList (event) {
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