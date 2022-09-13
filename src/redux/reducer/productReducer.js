const initialState={
    product:[
        {
            id:1,
            title:"Dipest",
            category:"programming",
        },
    ]
}
export const productReducer=(state,{type,payload)=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}