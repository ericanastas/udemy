
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {

    const [users, setUsers] = useState([]);

    const onAddUserHandler = user => {

        let newUser = { id: Math.random(), ...user }

        setUsers(prevUsers => {
            return [...prevUsers, newUser]
        })
    };
    return (
        <div>
            <UserForm onAddUser={onAddUserHandler} />
            <UserList users={users} />
        </div>
    );
}

export default App;
