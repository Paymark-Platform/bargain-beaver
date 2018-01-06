import * as Products from './../interfaces';

export class ProductResults 
{
    amazon: Array<Products.IAmazon>;
    bestBuy: Array<Products.IBestBuy>;
    ebay: Array<Products.IEbay>;
    macys: Array<Products.IMacys>;
    walmart: Array<Products.IWalmart>;
}