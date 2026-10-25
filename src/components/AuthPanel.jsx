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

// createContext() — maakt een context aan.
// AuthProvider — beheert en deelt de gebruikersstatus.
// useAuth() — geeft componenten toegang tot de context.
// login() en logout() — wijzigen de gebruikersstatus.
// useState() — zorgt ervoor dat React de interface opnieuw rendert wanneer de gebruiker verandert.