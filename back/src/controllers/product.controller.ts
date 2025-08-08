import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsService } from "../services/products.service";
import getProductByIdService from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);


export const getProductById = (
  async (req: Request, res: Response) => {  
    const product = await getProductByIdService(Number(req.params.id));
    res.json(product);
  }
);
