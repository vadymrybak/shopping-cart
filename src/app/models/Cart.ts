import Product from './Product';

export default class Cart {
    private products: Array<Product>;

    constructor(){
        this.products = [];
    }

    addToCart(product: Product){
        this.products.push(product);
    }
}