export function showAllColorOptions(event) {
  event.preventDefault();

  const $wrapperColors = document.querySelector(
    ".form__session--colors .form__session--options"
  );
  const $buttonAllColors = event.target;

  $wrapperColors.classList.remove("showFiveItems");
  $buttonAllColors.hidden = true;
}
