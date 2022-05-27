import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'
const UsersList = (props) => {
    return (
        <Card className={classes.list}>
            <ul>
                {props.data.map((each) => (
                    <div className={classes.list_holder} key={each.id}>
                        {each.name}, {each.age} years old, Email: {each.email}
                    </div>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList