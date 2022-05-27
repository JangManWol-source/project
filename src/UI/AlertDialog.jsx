import React from 'react'
import Button from './Button'
import classes from './AlertDialog.module.css'
import Card from './Card'

const AlertDialog = (props) => {
  return (
    <Card className={classes.alertDialog}>
        <div>
        <header className={classes.title}>
            {props.title}
        </header>
        </div>
        <div className={classes.message}>
            <p>{props.message}</p>
        </div>
        <div>
            
        <footer className={classes.footer}>
            <Button onClick={props.onConfirm} type="submit">{props.button}</Button>
        </footer>
        </div>
    </Card>
  )
}

export default AlertDialog