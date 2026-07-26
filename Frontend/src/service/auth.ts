import { api } from "./api";


export async function loginRequest(email: string, password: string) {
    try {
        const request = await api.post('/auth/login', {
            email,
            password
        });
        console.log(request);
        return request.data;
    } catch (error) {
        console.log("erro na requisição:", error);
    }
}

export const createContaRequest = async (name: string, email: string, password: string) => {
    try {
        const response = await api.post('/auth/register', { name, email, password });
        return response;
    } catch (error) {
        console.error("Erro na requisição", error);
        throw error;
    }
}