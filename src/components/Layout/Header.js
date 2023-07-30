import React,{ Fragment } from "react"
import classes from './Header.module.css'
import mealsImg from '../../assets/img.jpg'
import HeaderButton from "./HeaderButton"



const Header=(props)=>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Welcome to our Page</h1>
                <HeaderButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt='Food ordering application'/>
            </div>
        </Fragment>
    );
}

export default Header