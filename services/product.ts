import { data } from '../data/index';

// this function will get all producs from data 
export const getAllProducts = ()=>{
    return data.products;
}

// this functions will get one product by id when it finds return the product
export const getProductsById = (id:number)=>{
    return data.products.find(product=> product.id === id);
}

// this function will get products from a specific category, using filter it creates a new array.
export const getProductsByCategory = (idCategory:number)=>{
    return data.products.filter(item=> item.idCategory === idCategory);
}