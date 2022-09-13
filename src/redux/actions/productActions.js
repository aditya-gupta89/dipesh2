import { ActionsTypes } from "../contants/action-types"
export const setProducts=(products)=>{
    return{
        type:ActionsTypes.SET_PRODUCTS,
        payload:products,

    };
}
export const selectedProducts=(product)=>{
    return{
        type:ActionsTypes.SELECTED_PRODUCT,
        payload:product,

    };
}