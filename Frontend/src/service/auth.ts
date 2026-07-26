import { api } from "./api";


export async function loginRequest(email: string, password: string) {
    try {
        const request = await api.post('/auth/login', {
            email,
            password
        });
        return request.data;
    } catch (error) {
        console.log("erro na requisição:", error);
    }
}