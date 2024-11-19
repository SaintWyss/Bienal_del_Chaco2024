import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/eventos'; // Usa correctamente la variable de entorno

export const getEventos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los eventos:', error);
        throw error;
    }
};

export const getEventoById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el evento por ID:', error);
        throw error;
    }
};

// Crear un nuevo evento
export const createEvento = async (eventoData: any) => {
    try {
        await axios.post(API_URL, eventoData);
        return 'Evento creado con éxito';
    } catch (error) {
        console.error('Error al crear el evento:', error);
        throw error;
    }
};

// Actualizar un evento existente
export const updateEvento = async (id: string, eventoData: any) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, eventoData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el evento:', error);
        throw error;
    }
};

// Eliminar un evento
export const deleteEvento = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el evento:', error);
        throw error;
    }
};
