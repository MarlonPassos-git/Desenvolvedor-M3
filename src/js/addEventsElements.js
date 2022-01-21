import { showMoreItems } from "./events/showMoreItems";
import { sortElementsOnPage } from "./events/sortElementsOnPage";
import { handleFiltersChange } from "./events/handleFiltersChange";
import { showAllColorOptions } from "./events/showAllColorOptions";
import { showModalscreen } from "./events/showModalscreen";
import { toggleModal } from "./events/toggleModal";
import { pageLock } from "./events/pageLock";
import { possibilityToSeselectSelectedElement } from "./events/possibilityToSeselectSelectedElement";

export function addEventsElements(TOT_ITEMS_PAGE) {
  // sectioning all the elements of my page that have some kind of event
  const $moreItems = document.querySelector(".menu__moreItems");
  const $orderSelect = document.querySelector(".menu__order");
  const $formFilters = document.querySelector(".filters__form");
  const $wrapperPrices = document.querySelectorAll(".form__session--options input");
  const $buttonAllColors = document.querySelector(".form__session--button");
  const $buttonFilter = document.querySelector(".menu__bottom--filter");
  const $buttonOrder = document.querySelector(".menu__bottom--ordenar");
  const $buttonModalClose = document.querySelector(".modal__buttonClosed");

  // adding event on these elements
  $moreItems.addEventListener("click", showMoreItems);
  $orderSelect.addEventListener("change", sortElementsOnPage);
  $buttonAllColors.addEventListener("click", showAllColorOptions);
  $formFilters.addEventListener("change", () => handleFiltersChange(".filters__form"));
  $buttonFilter.addEventListener("click", () =>showModalscreen("filtrar", $formFilters));
  $buttonOrder.addEventListener("click", () => showModalscreen("Ordernar", $orderSelect));
  $buttonModalClose.addEventListener("click", () => {
    toggleModal();
    pageLock();
  });
  $wrapperPrices.forEach((input) => {
    input.addEventListener("click", possibilityToSeselectSelectedElement);
  });
}
