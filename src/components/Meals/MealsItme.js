import MealsForm from "./MealsForm"
import classes from "./MealsItem.module.css"
import { useContext } from "react"
import cartContext from "../../store/Cart-Context"
// import ContextProvider from "../../store/contextProvider"
const MealsItem = (props)=>{
    const price=`Rs${props.price}`
    const ctx=useContext(cartContext)
    const onAddHandler=(amount)=>{
        ctx.addItem({
            name: props.name,
            amount: parseInt(amount),
            price:props.price,
            id:props.id,
        })
    }

    return (
        <li className={classes.meals}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.price}>{price}</div>
            <div className={classes.description}>{props.description}</div>
        </div>
        <div><MealsForm id={props.id} onAddAmount={onAddHandler} /></div>
        </li>
    )
}

export default MealsItem