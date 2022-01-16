import { pageLock } from "./pageLock";
import { sortList } from "./sortList";
import { toggleModal } from "./toggleModal";

export function AddOrderEventsContent(content){
    const $select = content.querySelector('select')
    const $optionDisabled = $select.querySelector('option[disabled]')

    $optionDisabled.remove()
    $select.size = 3;

    content.addEventListener('click', (event) => {
        
        sortList(event)
        toggleModal()
        pageLock()
    })
}