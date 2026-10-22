import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserMenu() {
    const user = useContext(UserContext);

    return (
        <div>
            <p>Ingelogd als: {user.name}</p>
            <p>Rol: {user.role}</p>
        </div>
    );
}

export default UserMenu;