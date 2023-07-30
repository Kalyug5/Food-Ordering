import React from "react";
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop=()=>{
    return(
        <div  className={classes.backdrop} />
        
    )
}

const ModalOverlays=(props)=>{
    return(
        <div className= {classes.modal}>
            <div className={classes.content}>{props.children}</div>
            </div>
            
    )
}

const Modals=(props)=>{
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>,document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,document.getElementById('overlays'))}
        </React.Fragment>
    )
}
export default Modals