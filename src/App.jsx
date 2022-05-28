import React, { useState } from 'react'
import Wrapper from './Helper/Wrapper'
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
    <Wrapper>
    <AddUser onAddUser={addUserDataHandler}/>
    <UsersList data={data}/>
    </Wrapper>
  )
}

export default App