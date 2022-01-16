import { AddFilterEventsContent } from "./AddFilterEventsContent";
import { AddOrderEventsContent } from "./AddOrderEventsContent";

export function fillModal (title, $content) {
    const $modalTitle = document.querySelector('.modal__title');
    const $modalContent = document.querySelector('.modal__content');
    const $cloneContent = $content.cloneNode(true);
    $modalTitle.innerHTML = title;

    console.log($modalContent)

    if (title == 'Ordernar') AddOrderEventsContent($cloneContent)
    if (title == 'filtrar') AddFilterEventsContent($cloneContent)
    

    $modalContent.innerHTML = '';
    $modalContent.appendChild($cloneContent);
}