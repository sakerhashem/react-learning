import { useAuth } from "../context/AuthContext";

function UserMenu() {
    const { user } = useAuth();

    return (
        <div>
            <p>Ingelogd als: {user.name}</p>
            <p>Rol: {user.role}</p>
        </div>
    );
}

export default UserMenu;