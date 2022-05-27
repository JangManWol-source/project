import React from 'react'
import Card from '../UI/Card'
import classes from '../Users/AddUser.module.css'
import Button from '../UI/Button'
import { useState } from 'react'
import AlertDialog from '../UI/AlertDialog'

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('email@example.com')
  const [error, setError] = useState()
    const onSubmitHandler = (event) => {
            event.preventDefault();
            if (enteredName.length === 0 || enteredAge.length === 0) {
              setError({
                title: "Invalid Input",
                message: "Please do not leave blank in the edit text."
              })
              return;  
            }
            if(+enteredAge < 1){
              setError(
                {
                  title: "Invalid Input",
                  message: "Please input number that is greater than 0."
                }
              )
              return;
            }

            props.onAddUser(enteredName, enteredAge, enteredEmail)
            setEnteredName('')
            setEnteredAge('')
    }

    const enteredNameHandler = (event) => {
      setEnteredName(event.target.value)
    }
    const enteredAgeHandler = (event) => {
      setEnteredAge(event.target.value)
    }
    const enteredEmailHandler = (event) => {
      setEnteredEmail(event.target.value)
    }

    const errorHandler = () => {
      setError(null)
    }
  return (
    <div>
      {error && <AlertDialog title={error.title} onConfirm={errorHandler} message={error.message} button="OKAY"/>}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input value={enteredName} id='username' type="text" onChange={enteredNameHandler} />
            <label htmlFor="email" id='email'>Email</label>
            <input value={enteredEmail} onChange={enteredEmailHandler} type="email"/>
            <label htmlFor="age">Age</label>
            <input type="number" value={enteredAge} id='age' onChange={enteredAgeHandler}/>
            <Button type='submit' onClick={onSubmitHandler}>Submit</Button>
        </form>
    </Card>
    </div>
  )
}

export default AddUser