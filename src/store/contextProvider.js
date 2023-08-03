import React from "react";
import { useReducer } from "react";
import cartContext from "./Cart-Context";

const CartItems={
    items:[],
    totalAmount: 0
}

const CartReducer=(state,action)=>{

    if(action.type==='ADD'){
        const existingCartIndex=state.items.findIndex((item)=>item.id===action.item.id)
        const existingCartElement=state.items[existingCartIndex]
        let updatedItems;
        if(existingCartElement){
            //update the amount of an already added product in the cart
            let upadatedItem={
                ...existingCartElement,
                amount:existingCartElement.amount+action.item.amount
            }
            updatedItems=[...state.items]
            updatedItems[existingCartIndex]=upadatedItem

        }else{
        updatedItems=state.items.concat(action.item)

        }
        const newAmount=state.totalAmount+action.item.price*action.item.amount
    
    return {
        items:updatedItems,
        totalAmount:newAmount
        
    }
    
}
//removing elements
if(action.type==='REMOVE'){
    const existingCartIndex=state.items.findIndex(item=>item.id===action.id)
    const existingCartElement=state.items[existingCartIndex]
    const updatedAmount=state.totalAmount-existingCartElement.price
    let updatedItems
    if(existingCartElement.amount===1){
        //remove the item from array and update state
        updatedItems=state.items.filter((item)=>
            item.id!==action.id)

    }else{
        const updatedItem={...existingCartElement,amount:existingCartElement.amount-1}
        updatedItems=[...state.items]
        updatedItems[existingCartIndex]=updatedItem

    }
    return{
        items:updatedItems,
        totalAmount:updatedAmount
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