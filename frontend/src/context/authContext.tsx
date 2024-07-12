import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    userId: number | null;
    login: (userId: number) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userId, setUserId] = useState<number | null>(null);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (token) {
                    const response = await fetch(
                        "http://localhost:5000/api/is_authenticated",
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            } as HeadersInit,
                            credentials: "include", // Füge credentials hinzu
                        }
                    );

                    if (response.ok) {
                        const { userId, isLoggedIn } = await response.json();
                        setIsLoggedIn(isLoggedIn);
                        setUserId(userId);
                    } else {
                        setIsLoggedIn(false);
                        setUserId(null);
                    }
                } else {
                    setIsLoggedIn(false);
                    setUserId(null);
                }
            } catch (error) {
                console.error("Fehler beim Überprüfen des Auth-Status", error);
                setIsLoggedIn(false);
                setUserId(null);
            }
        };

        checkAuthentication();
    }, []);

    const login = (userId: number) => {
        setIsLoggedIn(true);
        setUserId(userId);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        setUserId(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, userId }}>
            {children}
        </AuthContext.Provider>
    );
};
