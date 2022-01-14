import { getApiItems } from './getApiItems.js';
import { addEventsElements } from './addEventsElements.js';
import { showItemsScreen } from './showItemsScreen';
import { cartNumberRender } from './cartNumberRender.js';

localStorage.removeItem('productsList')
localStorage.setItem('TOT_ITEMS_CART', 0);
localStorage.setItem('ITEMS_AT_A_TIME', 3);

let TOT_ITEMS_PAGE = localStorage.getItem('ITEMS_AT_A_TIME');

getApiItems(true, TOT_ITEMS_PAGE);
cartNumberRender()
addEventsElements(TOT_ITEMS_PAGE, showItemsScreen)

    
    
    








