import { getDataFormFilters } from "../getDataFormFilters";
import { showItemsScreen } from "../showItemsScreen";

export async function handleFiltersChange (cssSelector) {

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

    const items_at_a_time = +localStorage.getItem('ITEMS_AT_A_TIME');


    localStorage.setItem('TOT_ITEMS_PAGE', items_at_a_time);
    showItemsScreen()
}