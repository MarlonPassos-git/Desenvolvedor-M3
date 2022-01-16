export function getDataFormFilters(cssSelector) {
    console.log(cssSelector)
    const $form = document.querySelector(cssSelector);
    const $wrapperColors = $form.querySelectorAll('.form__session--colors input');
    const $wrapperSizes = $form.querySelectorAll('.form__session--sizes input');
    const $wrapperPrices = $form.querySelectorAll('.form__session--prices input');
    const colors = [];
    const sizes = [];
    let price;


    for (let input of $wrapperColors) {
        if (input.checked) {
            colors.push(input.value)
        }
    }

    for (let wrapper of $wrapperSizes) {
        if (wrapper.checked) {
            sizes.push(wrapper.value)
        }
    }

    for (let wrapper of $wrapperPrices) {
        if (wrapper.checked) {
            price = wrapper.value
        }
    }

    return {colors, sizes, price}
}