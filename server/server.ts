import * as express from 'express';
import {Application} from "express";

import { getAllProducts } from "./get-products";
import { getProjectById } from "./getProductById";


const app: Application = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.route('/data/getProducts.php').get(getAllProducts); // 
app.route('/data/getProductById.php').get(getProjectById);


const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




