import axios from 'axios';
import { tokenService } from '../services/tokenService.ts';

const API_URL = import.meta.env.VITE_API_URL + '/api';

export const register = async (username: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, { username, email, password });
        const { token, user } = response.data;

        tokenService.setToken(token);
        tokenService.setRole(user.role);

        return user;
    } catch (error) {
        console.error('Error al registrar al usuario:', error);
        return null;
    }
};

export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { username, password });
        const { token, user } = response.data;

        tokenService.setToken(token);
        tokenService.setRole(user.role);

        return user;
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        return null;
    }
};

export const logout = () => {
    tokenService.removeToken();
    tokenService.removeRole();
    window.location.href = '/'; // Alternativa sin React Router
};



export const getUser = async () => {
    try {
        const token = tokenService.getToken();
        if (!token) throw new Error('No hay token de autenticación');

        // Cambia aquí para usar API_URL
        const response = await axios.get(`${API_URL}/user`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log('User fetched:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error al obtener los datos del usuario:', error.response || error.message);
        return null;
    }
};

export const isAuthenticated = () => {
    const token = tokenService.getToken();
    console.log('isAuthenticated:', !!token); // Verifica si el token existe
    return !!token;
};

export const getRole = () => tokenService.getRole();