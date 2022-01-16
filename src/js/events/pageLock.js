export function pageLock() {
    
    const $body = document.querySelector('body');
    $body.classList.toggle('lock');
}