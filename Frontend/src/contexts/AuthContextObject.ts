import { createContext } from "react";

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    checkAuth: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);