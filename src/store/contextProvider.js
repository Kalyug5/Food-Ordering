import React from "react";
import { useReducer } from "react";
import cartContext from "./Cart-Context";

const CartItems={
    items:[],
    totalAmount: 0
}

const CartReducer=(state,action)=>{

    if(action.type==='ADD'){
        const itemArr=state.items.concat(action.item)
        const newAmount=state.totalAmount+action.item.price*action.item.amount
    
    return {
        items:itemArr,
        totalAmount:newAmount
        
    }
}
return CartItems
}

const ContextProvider=(props)=>{

    const [Cartstate,dispatchState]=useReducer(CartReducer,CartItems)
    function addItemHandler(item){
            dispatchState({type:'ADD',item:item})
    }
    function removeItemHandler(id){
            dispatchState({type:'REMOVE',id:id})
    }

    const content={
        items:Cartstate.items,
        totalAmount:Cartstate.totalAmount,
        addItem:addItemHandler,
        removeItemById:removeItemHandler
    }

    return (
        <cartContext.Provider value={content}>
            {props.children}
        </cartContext.Provider>
    )
}

export default ContextProvider