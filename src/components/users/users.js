import React, {useEffect, useState} from 'react';
import User from "../user/user";

const Users = ({setUserId}) => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(allUsers => {
                setUsers(allUsers);
            })

    }, [])

    return (
        <>

            {
                users.map(user => <User user={user} key={user.id} setUserId={setUserId}/>)
            }
        </>
    );
};

export default Users;