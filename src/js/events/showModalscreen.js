import { fillModal } from "./fillModal"
import { pageLock } from "./pageLock"
import { toggleModal } from "./toggleModal"

export function showModalscreen (title, $formElement) {
    pageLock()
    toggleModal()
    fillModal(title, $formElement)
}