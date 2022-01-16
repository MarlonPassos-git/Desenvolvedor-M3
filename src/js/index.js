import { getApiItems } from "./getApiItems.js";
import { addEventsElements } from "./addEventsElements.js";
import { showItemsScreen } from "./showItemsScreen";
import { cartNumberRender } from "./cartNumberRender.js";

localStorage.removeItem("productsList");
localStorage.setItem("TOT_ITEMS_CART", 0);
localStorage.setItem("ITEMS_AT_A_TIME", 9);
localStorage.setItem("TOT_ITEMS_PAGE", 9);

getApiItems(true);
cartNumberRender();
addEventsElements(showItemsScreen);
