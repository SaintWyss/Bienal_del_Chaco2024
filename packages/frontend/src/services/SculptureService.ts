import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/esculturas';

export const getEsculturasbyEvent = async (eventoID: any) => {
    try {
        // Verificar si el eventoID está definido antes de hacer la solicitud
        if (!eventoID) {
            throw new Error('Evento ID no proporcionado');
        }

        // Realizamos la solicitud con el eventoID
        const response = await axios.get(`${API_URL}/${eventoID}`);

        // Retornamos la data de la respuesta
        return response.data;
    } catch (error: any) {
        console.error('Error al obtener las esculturas:', error.message || error);
        throw error;  // Lanzar error para ser manejado en el lugar que llama a esta función
    }
};

// Obtener todas las esculturas
export const getEsculturas = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las esculturas:', error);
        throw error;
    }
};


// Crear una nueva escultura
export const createEscultura = async (data: any) => {
    try {
        const response = await axios.post(`${API_URL}`, data);
        return response.data;
    } catch (error) {
        console.error('Error al crear escultura:', error);
        throw error;
    }
};

// Actualizar una escultura existente
export const updateEscultura = async (id: string, esculturaData: any) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, esculturaData);
        return response.data; // Devuelve la escultura actualizada
    } catch (error) {
        console.error('Error al actualizar la escultura:', error);
        throw error;
    }
};

// Eliminar una escultura
export const deleteEscultura = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; // Confirmación de la eliminación
    } catch (error) {
        console.error('Error al eliminar la escultura:', error);
        throw error;
    }
};
