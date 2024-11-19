//hooks/useAuth.ts
import { login, logout, getUser } from '../utils/AuthService.ts';
import {useState} from "react";
import {useNavigate} from "react-router-dom";




// Define el tipo de usuario
interface User {
    id: number;
    username: string;
    email: string;
    // Otros campos que sean relevantes para tu usuario
}

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null); // Estado para almacenar el usuario autenticado
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores



    // Función para manejar el login
    const handleLogin = async (username: string, password: string) => {
        try {
            const loggedInUser = await login(username, password); // Llama al servicio para autenticación
            if (loggedInUser) {
                setUser(loggedInUser); // Actualiza el estado con el usuario autenticado
            }
        } catch (err) {
            setError('Error al iniciar sesión'); // Maneja errores
        }
    };

    // Función para manejar el logout
    const handleLogout = async () => {
        try {
            logout(); // Limpia el token y rol
            setUser(null); // Limpia el estado
            const navigate = useNavigate();
            navigate('/'); // Redirige a la ruta raíz
        } catch (err) {
            setError('Error al cerrar sesión'); // Maneja errores
        }
    };

    // Función para obtener el usuario actual
    const fetchUser = async () => {
        try {
            const currentUser = await getUser(); // Llama al servicio para obtener el usuario
            setUser(currentUser); // Actualiza el estado con el usuario actual
        } catch (err) {
            console.log('No se pudo obtener el usuario o no hay sesión activa.');
            setUser(null); // Limpia el estado
        }
    };



    return { user, error, handleLogin, handleLogout, fetchUser }; // Devuelve el estado del usuario y las funciones de autenticación
};

export default useAuth; // Exporta el hook para su uso en otros components
