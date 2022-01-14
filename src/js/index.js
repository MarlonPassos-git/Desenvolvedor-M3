import { getApiItems } from './getApiItems.js';
import { addEventsElements } from './addEventsElements.js';
import { showItemsScreen } from './showItemsScreen';
import { cartNumberRender } from './cartNumberRender.js';

let TOT_ITEMS_PAGE = 3;


localStorage.setItem('TOT_ITEMS_CART', 0);


getApiItems(TOT_ITEMS_PAGE);
cartNumberRender()

addEventsElements(TOT_ITEMS_PAGE, showItemsScreen)



