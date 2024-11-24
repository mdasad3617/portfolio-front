import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/contact',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitContactForm = async (formData) => {
  try {
    const response = await apiClient.post('/', formData); 
    return response.data;
  } catch (error) {
    console.error('Error submitting the form:', error.response || error.message);
    throw error;
  }
};
