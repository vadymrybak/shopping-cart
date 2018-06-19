

import {Request, Response} from 'express';
import { PRODUCTS } from "./_products";
import Product from '../src/app/models/Product';


export function getProjectById (req: Request, res: Response) {
    
    const id: number = req.query["id"];
    //let product: Product = PRODUCTS.filter(product => product.id == id)[0];
    setTimeout(function() {
        res.status(200).json(
            {
                payload :  PRODUCTS.filter(product => product.id == id)[0]
            }
        );
    }, 1500);

    

}