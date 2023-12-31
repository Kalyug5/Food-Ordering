import React from "react";

const cartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItemById:(id)=>{}
})

export default cartContext