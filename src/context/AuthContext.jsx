import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function login() {
        setUser({
            name: "John Doe",
            role: "Full Stack Developer"
        });
    }
    
    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

// AuthContext: de context waarin we authenticatiegegevens delen.
// AuthProvider: beheert de gebruikersstate en maakt die beschikbaar aan onderliggende componenten.
// children: alle componenten die binnen AuthProvider worden geplaatst.
// useAuth(): een eigen Hook waarmee componenten de context eenvoudig kunnen uitlezen.
// useState(null) bewaart de gebruiker binnen AuthProvider.
// login() wijzigt de gebruiker met setUser(...).
// logout() maakt de gebruiker null.
// value={{ user, login, logout }} stelt alle drie beschikbaar aan componenten die useAuth() gebruiken.