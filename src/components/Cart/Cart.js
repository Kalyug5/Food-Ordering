import React from "react";
import classes from './Cart.module.css'
import Modals from "../UI/Modal";
import { useContext } from "react";
import cartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";

const Cart=(props)=>{
    const ctx=useContext(cartContext)
    const totalAmt=`Rs${ctx.totalAmount}`
    const hasItems=ctx.items.length>0
    const cartitems=(<ul className={classes['cart-items']}>{ctx.items.map((item)=>(
        <CartItem name={item.name} key={item.id} amount={item.amount} price={item.price}/>
    ))}</ul>)
    function closingModal(){
        props.onClose(false)
    }

    return(
        <Modals>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmt}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={closingModal}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modals>
    )
}
export default Cart