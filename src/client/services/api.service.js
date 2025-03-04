import axios from 'axios';

/**
 * Creates an API service with the given configuration
 * @param {string} baseURL - The base URL for the API
 * @param {Object} options - Additional options for the API service
 * @returns {Object} - The API service object
 */
const createApiService = (baseURL, options = {}) => {
  const apiBaseURL = baseURL || process.env.REACT_APP_API_URL || '/api';
  
  // Create axios instance with default config
  const api = axios.create({
    baseURL: apiBaseURL,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    timeout: options.timeout || 30000, // Default timeout: 30 seconds
    ...options
  });

  // Setup request interceptor
  api.interceptors.request.use(
    (config) => {
      // Get token from localStorage or other storage
      const token = localStorage.getItem('token');
      
      // If token exists, add it to the headers
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Setup response interceptor
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle common errors
      if (error.response) {
        // Server responded with a status code outside of 2xx range
        const { status } = error.response;
        
        if (status === 401) {
          // Handle unauthorized access
          // For example, redirect to login page or refresh token
          console.error('Unauthorized access');
          // You might want to dispatch an action or trigger an event
        } else if (status === 403) {
          // Handle forbidden access
          console.error('Forbidden access');
        } else if (status === 404) {
          // Handle not found
          console.error('Resource not found');
        } else if (status >= 500) {
          // Handle server errors
          console.error('Server error');
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from server');
      } else {
        // Something happened in setting up the request
        console.error('Error setting up request:', error.message);
      }
      
      return Promise.reject(error);
    }
  );

  // Return the API service object with methods
  return {
    /**
     * Performs a GET request
     * @param {string} url - The URL to make the request to
     * @param {Object} params - Query parameters
     * @param {Object} config - Additional axios config
     * @returns {Promise} - The axios promise
     */
    get: (url, params = {}, config = {}) => {
      return api.get(url, { params, ...config });
    },

    /**
     * Performs a POST request
     * @param {string} url - The URL to make the request to
     * @param {Object} data - The data to send
     * @param {Object} config - Additional axios config
     * @returns {Promise} - The axios promise
     */
    post: (url, data = {}, config = {}) => {
      return api.post(url, data, config);
    },

    /**
     * Performs a PUT request
     * @param {string} url - The URL to make the request to
     * @param {Object} data - The data to send
     * @param {Object} config - Additional axios config
     * @returns {Promise} - The axios promise
     */
    put: (url, data = {}, config = {}) => {
      return api.put(url, data, config);
    },

    /**
     * Performs a PATCH request
     * @param {string} url - The URL to make the request to
     * @param {Object} data - The data to send
     * @param {Object} config - Additional axios config
     * @returns {Promise} - The axios promise
     */
    patch: (url, data = {}, config = {}) => {
      return api.patch(url, data, config);
    },

    /**
     * Performs a DELETE request
     * @param {string} url - The URL to make the request to
     * @param {Object} config - Additional axios config
     * @returns {Promise} - The axios promise
     */
    delete: (url, config = {}) => {
      return api.delete(url, config);
    },

    /**
     * Performs multiple requests concurrently
     * @param {Array} requests - Array of request promises
     * @returns {Promise} - Promise that resolves when all requests are complete
     */
    all: (requests) => {
      return axios.all(requests);
    },

    /**
     * Creates a callback that spreads the response array into individual arguments
     * @param {Function} callback - The callback to spread the responses to
     * @returns {Function} - The callback with spread arguments
     */
    spread: (callback) => {
      return axios.spread(callback);
    }
  };
};

export default createApiService;
