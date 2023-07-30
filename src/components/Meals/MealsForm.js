import { useRef } from "react"

import React from "react"
import classes from "./MealsForm.module.css" 
import Input from "../UI/Input"



const MealsForm=(props)=>{

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        const enteredAmount=InputRefs.current.value
        const enteredAmountNumber=+enteredAmount
        if(enteredAmount.trim().length===0 || enteredAmountNumber>5 || enteredAmountNumber<1){
            alert("Please enter a valid amount between 1 and 5")
            //clear the value of form field after error message is shown to user
            InputRefs.current.value=""
            return;
        }
        props.onAddAmount(enteredAmountNumber)
    }
    const InputRefs=useRef()
    return (
        <form className={classes.forms} onSubmit={onSubmitHandler}>
            <Input ref={InputRefs} label="Amount" input={{
                id:'amount_'+props.id,
                type:'number',
                max:'5',
                min: '1',
                step:"1",
                defaultValue:"1"
            }} />
            <button className={classes.button}>+ADD NOW</button>
        </form>
    )
}

export default MealsForm