import React, { useState } from 'react'
import AddUser from './Users/AddUser'
import UsersList from './Users/UsersList'

const App = () => {
    const [data, setData] = useState([])

    const addUserDataHandler = (name, age, email) => {
        setData((prevUserData) => {
            return [...prevUserData, {name: name, email: email, age: age, id: Math.random().toString()}]
            
        })

        console.log(data)
    }
  return (
    <div>
    <AddUser onAddUser={addUserDataHandler}/>
    <UsersList data={data}/>
    </div>
  )
}

export default App