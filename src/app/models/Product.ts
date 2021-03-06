import { ProductCategory } from './ProductCategory';

export default class Product {
    id: number;
    product_id: string;
    product_name: string;
    product_category: ProductCategory;
    product_price: number;
    product_description: string;
    product_in_stock: boolean;
    product_image: string;

    quantity: number;

    constructor() {
        
    }
}