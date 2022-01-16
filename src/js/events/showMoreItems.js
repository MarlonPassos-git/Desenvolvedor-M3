import { showItemsScreen } from "../showItemsScreen";

export function showMoreItems() {

    const totItemsPage = +localStorage.getItem('TOT_ITEMS_PAGE');
    const items_at_a_time = +localStorage.getItem('ITEMS_AT_A_TIME');
    localStorage.setItem('TOT_ITEMS_PAGE', totItemsPage + items_at_a_time);
    showItemsScreen()
}