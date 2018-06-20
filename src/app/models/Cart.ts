import Product from './Product';

export default class Cart {
    public products: Array<Product>;
    public sub_total: number;
    public grand_total: number;
    public gst_hst: number;

    constructor(){
        this.products = [];
        this.sub_total = 0;
        this.grand_total = 0;
        this.gst_hst = 0;
    }

    addToCart(product: Product): void {
        this.products.push(product);
        this.calculateCart();
    }

    calculateCart(): void {
        this.sub_total = 0;
        this.products.forEach(this_product => {
            for (let index = 0; index < this_product.quantity; index++) {
                this.sub_total = +this.sub_total + +this_product.product_price;
            } 
            this.gst_hst = +this.gst_hst + this_product.product_price / 100 * 13;
        });
        this.grand_total = this.sub_total + this.gst_hst + 20;
    }
}