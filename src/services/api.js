import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Backend URL

export const fetchSearchResults = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/search`, {
            params: { q: query }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching search results:', error);
        throw error;
    }
};
