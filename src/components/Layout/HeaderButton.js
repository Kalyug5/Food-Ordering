import CartIcon from "../Cart/CartIcon"
import classes from './HeaderButton.module.css'
import { useState } from "react"
import Cart from "../Cart/Cart"
// import ContextProvider from "../../store/contextProvider"
import { useContext } from "react"
import cartContext from "../../store/Cart-Context"


const HeaderButton = props=>{

    const cartCtx=useContext(cartContext)

    const numberOfCartItems=cartCtx.items.reduce((currVal,item)=>{
            return currVal+item.amount
    },0)

    const [Cartvalue,setCartValue]=useState(false)
    function cartChangeHandler(){
        setCartValue(true)
    }
    const closeModalHandler=()=>{
        //console.log("close modal")
        setCartValue((pervData)=>(
            false
        ))

    }
    
    return(
    
        Cartvalue ? (<Cart onClose={closeModalHandler}/>) : (<button className={classes.button} onClick={cartChangeHandler}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>)
    
    )
}

export default HeaderButton