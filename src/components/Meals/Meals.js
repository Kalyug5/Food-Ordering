import React,{Fragment} from "react"
import AvailableMeals from "./AvailableMeals"
import MealSummary from "./MealSummarty"

const Meals =()=>{
    return (
        <Fragment>
            <MealSummary/>
            <AvailableMeals/>
            
        </Fragment>
    )
}

export default Meals