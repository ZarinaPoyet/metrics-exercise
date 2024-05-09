import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchMetrics = async () => {
  try {
    const response = await axios.get(`${API_URL}/metrics`);
    return response.data;
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error;
  }
};

export const addMetric = async (metric) => {
  try {
    const response = await axios.post(`${API_URL}/metric`, metric);
    return response.data;
  } catch (error) {
    console.error('Error adding metric:', error);
    throw error;
  }
};
