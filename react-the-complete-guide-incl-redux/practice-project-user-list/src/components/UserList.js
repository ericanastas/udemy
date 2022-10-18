import UserListItem from "./UserListItem";
import Card from "./Card";

const UserList = props => {
    return (
        <Card>
            <ul>
                {props.users.map(user => <UserListItem key={user.id} username={user.username} age={user.age} />)}
            </ul>
        </Card>);
}

export default UserList;