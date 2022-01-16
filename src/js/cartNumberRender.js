export function cartNumberRender() {
  const $shoppingCartNumber = document.querySelector(
    ".header__shoppingCart span"
  );
  const TOT_ITEMS_CART = +parseInt(localStorage.getItem("TOT_ITEMS_CART"));

  $shoppingCartNumber.innerHTML = TOT_ITEMS_CART;
}
