import { useAuth } from "../context/AuthContext";

function UserProfile() {
    const { user } = useAuth();

    return (
        <div>
            <h2>User Profile</h2>
            <p>Naam: {user.name}</p>
            <p>Rol: {user.role}</p>
        </div>
    );
}

export default UserProfile;