import { useEffect, useState } from "react";
import { checkUser } from "../service/auth";
import { AuthContext } from "./AuthContextObject";
import type { User } from "./AuthContextObject";
import type { ReactNode } from "react";

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    async function checkAuth() {
        try {
            const userData = await checkUser();
            setUser(userData);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- fetch inicial de auth, uso legítimo de efeito
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
}