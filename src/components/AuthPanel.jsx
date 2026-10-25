import { useAuth } from '../context/AuthContext';
import UserProfile from "./UserProfile";
import UserMenu from "./UserMenu";

function AuthPanel() {
    const { user, login, logout } = useAuth();

    return (
        <div>
            {user ? (
            <>
                <UserProfile />
                <UserMenu />

                <button onClick={logout}>
                    Uitloggen
                </button>
            </>
            ) : (
            <>
                <p>Je bent niet ingelogd.</p>
                <button onClick={login}>
                    Inloggen
                </button>
            </>
            
            )}

        </div>
    );
}

export default AuthPanel;