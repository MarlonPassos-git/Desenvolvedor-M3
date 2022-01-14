export  function showItemsScreen(listItems) {
    const $productlist = document.querySelector('.menu__produtsList')
    
    $productlist.innerHTML = '';

    console.log(listItems);
    for (let element of listItems) {
        $productlist.appendChild(element)
    }
}