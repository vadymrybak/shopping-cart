

import {Request, Response} from 'express';
import { PRODUCTS } from "./_products";



export function getAllProducts (req: Request, res: Response) {
    
    const category: string = req.query["category"];

    setTimeout(function() {
        res.status(200).json(
            {
                payload :  PRODUCTS.filter(product => product.product_category === category)
            }
        );
    }, 200);

    

}