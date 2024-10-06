import axios from 'axios';

const API_URL = 'https://beast-search-backend-production.up.railway.app'; // Updated Backend URL

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
