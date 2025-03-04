import createApiService from './api.service';

/**
 * Creates a user service for handling user-related API calls
 * @param {string} baseURL - The base URL for the API (optional)
 * @param {Object} options - Additional options for the API service (optional)
 * @returns {Object} - The user service object
 */
const createUserService = (baseURL, options = {}) => {
  // Create the base API service
  const apiService = createApiService(baseURL, options);
  
  // Define the base endpoint for user-related operations
  const endpoint = '/users';

  // Return the user service object with methods
  return {
    /**
     * Get all users
     * @param {Object} params - Query parameters (pagination, filtering, etc.)
     * @returns {Promise} - The axios promise
     */
    getUsers: (params = {}) => {
      return apiService.get(endpoint, params);
    },

    /**
     * Get a specific user by ID
     * @param {string|number} id - The user ID
     * @returns {Promise} - The axios promise
     */
    getUser: (id) => {
      return apiService.get(`${endpoint}/${id}`);
    },

    /**
     * Create a new user
     * @param {Object} userData - The user data
     * @returns {Promise} - The axios promise
     */
    createUser: (userData) => {
      return apiService.post(endpoint, userData);
    },

    /**
     * Update a user (full update)
     * @param {string|number} id - The user ID
     * @param {Object} userData - The updated user data
     * @returns {Promise} - The axios promise
     */
    updateUser: (id, userData) => {
      return apiService.put(`${endpoint}/${id}`, userData);
    },

    /**
     * Partially update a user
     * @param {string|number} id - The user ID
     * @param {Object} userData - The partial user data to update
     * @returns {Promise} - The axios promise
     */
    patchUser: (id, userData) => {
      return apiService.patch(`${endpoint}/${id}`, userData);
    },

    /**
     * Delete a user
     * @param {string|number} id - The user ID
     * @returns {Promise} - The axios promise
     */
    deleteUser: (id) => {
      return apiService.delete(`${endpoint}/${id}`);
    },

    /**
     * User login
     * @param {Object} credentials - The login credentials
     * @returns {Promise} - The axios promise
     */
    login: (credentials) => {
      return apiService.post('/auth/login', credentials);
    },

    /**
     * User registration
     * @param {Object} userData - The user registration data
     * @returns {Promise} - The axios promise
     */
    register: (userData) => {
      return apiService.post('/auth/register', userData);
    },

    /**
     * Get the current user's profile
     * @returns {Promise} - The axios promise
     */
    getProfile: () => {
      return apiService.get('/auth/profile');
    },

    /**
     * Update the current user's profile
     * @param {Object} profileData - The updated profile data
     * @returns {Promise} - The axios promise
     */
    updateProfile: (profileData) => {
      return apiService.put('/auth/profile', profileData);
    },

    /**
     * Change the user's password
     * @param {Object} passwordData - The password change data
     * @returns {Promise} - The axios promise
     */
    changePassword: (passwordData) => {
      return apiService.post('/auth/change-password', passwordData);
    },

    /**
     * Request a password reset
     * @param {Object} data - The password reset request data
     * @returns {Promise} - The axios promise
     */
    requestPasswordReset: (data) => {
      return apiService.post('/auth/forgot-password', data);
    },

    /**
     * Reset the password using a token
     * @param {Object} data - The password reset data
     * @returns {Promise} - The axios promise
     */
    resetPassword: (data) => {
      return apiService.post('/auth/reset-password', data);
    },

    /**
     * Logout the current user
     * @returns {Promise} - The axios promise
     */
    logout: () => {
      return apiService.post('/auth/logout');
    }
  };
};

export default createUserService;
