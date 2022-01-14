export function createProduct({color, date, id, image, name, parcelamento, price, size}) {
    
    const totalPrice = price.toFixed(2);
    const [totPortion] = parcelamento;
    const portionPrice = (totalPrice / totPortion).toFixed(2);
    const parser = new DOMParser();

    console.log(portionPrice);

    const elementString = `
        <li class="productItem">
            <a href="#">
                <img src="${image}" alt="${name}" class="productItem__img">
            </a>
            <p class="productItem__name">
                ${name}
            </p>
            <strong class="productItem__price">
                R$ ${totalPrice}
            </strong>
            <p class="productItem__portion">
                até ${totPortion}x de R$ ${portionPrice}
            </p>
            <button class="productItem__button">
                Comprar
            </button>
        </li>
    `


    const $element = parser.parseFromString(elementString, 'text/html').body.firstChild;

    return $element;
}   

