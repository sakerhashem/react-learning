import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserProfile() {
    const user = useContext(UserContext);

    return (
        <div>
            <h2>User Profile</h2>
            <p>Naam: {user.name}</p>
            <p>Rol: {user.role}</p>
        </div>
    );
}

export default UserProfile;