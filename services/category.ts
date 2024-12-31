import {data} from '../data/index';
// This function will get all Categories from data without divide
export const getAllCategories = () =>{ 
    return data.categories;
}

// this function will get one category only by its id
export const  getCategoryById = (id:number) =>{
    return data.categories.find(item=>item.id===id);
}