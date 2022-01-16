import { getApiItems } from './getApiItems.js';
import { addEventsElements } from './addEventsElements.js';
import { showItemsScreen } from './showItemsScreen';
import { cartNumberRender } from './cartNumberRender.js';

localStorage.removeItem('productsList')
localStorage.setItem('TOT_ITEMS_CART', 0);
localStorage.setItem('ITEMS_AT_A_TIME', 4);
localStorage.setItem('TOT_ITEMS_PAGE', 4);

getApiItems(true);
cartNumberRender()
addEventsElements(showItemsScreen)

    
    
    








