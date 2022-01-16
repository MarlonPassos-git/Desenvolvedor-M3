import { showItemsScreen } from './showItemsScreen';

export async function getApiItems(firstCall) {
    
    const urlProduct = 'http://localhost:5000/products';

    fetch(urlProduct)
    .then(response => response.json())
    .then(async (dados) => {
       
        const products = []
        const totDados = dados.length;

        await localStorage.setItem('productsList', JSON.stringify(dados));
        await localStorage.setItem('AllproductsList', JSON.stringify(dados));

        if (firstCall) showItemsScreen()
    })
}