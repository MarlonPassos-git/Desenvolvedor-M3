import { handleFiltersChange } from "./handleFiltersChange";

let ultimoElementoMarcado = ''

export function possibilityToSeselectSelectedElement(event) {

    const valorElemento = event.target.value

    if (ultimoElementoMarcado === valorElemento) {

        const items_at_a_time = +localStorage.getItem('ITEMS_AT_A_TIME');

        event.target.checked = false
        ultimoElementoMarcado = ''
        localStorage.setItem('TOT_ITEMS_PAGE', items_at_a_time)
        handleFiltersChange('.filters__form')

    }
    else {
        ultimoElementoMarcado = valorElemento
    }
}   