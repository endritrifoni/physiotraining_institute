import createApiService from './api.service';

/**
 * Creates a template service for handling API calls
 * This is a template that can be copied and modified for new services
 * @param {string} baseURL - The base URL for the API (optional)
 * @param {Object} options - Additional options for the API service (optional)
 * @returns {Object} - The template service object
 */
const createTemplateService = (baseURL, options = {}) => {
  // Create the base API service
  const apiService = createApiService(baseURL, options);
  
  // Define the base endpoint for this service's operations
  const endpoint = '/resource';

  // Return the template service object with methods
  return {
    /**
     * Get all resources
     * @param {Object} params - Query parameters (pagination, filtering, etc.)
     * @returns {Promise} - The axios promise
     */
    getAll: (params = {}) => {
      return apiService.get(endpoint, params);
    },

    /**
     * Get a specific resource by ID
     * @param {string|number} id - The resource ID
     * @returns {Promise} - The axios promise
     */
    getById: (id) => {
      return apiService.get(`${endpoint}/${id}`);
    },

    /**
     * Create a new resource
     * @param {Object} data - The resource data
     * @returns {Promise} - The axios promise
     */
    create: (data) => {
      return apiService.post(endpoint, data);
    },

    /**
     * Update a resource (full update)
     * @param {string|number} id - The resource ID
     * @param {Object} data - The updated resource data
     * @returns {Promise} - The axios promise
     */
    update: (id, data) => {
      return apiService.put(`${endpoint}/${id}`, data);
    },

    /**
     * Partially update a resource
     * @param {string|number} id - The resource ID
     * @param {Object} data - The partial resource data to update
     * @returns {Promise} - The axios promise
     */
    patch: (id, data) => {
      return apiService.patch(`${endpoint}/${id}`, data);
    },

    /**
     * Delete a resource
     * @param {string|number} id - The resource ID
     * @returns {Promise} - The axios promise
     */
    delete: (id) => {
      return apiService.delete(`${endpoint}/${id}`);
    },

    /**
     * Custom method example
     * @param {string|number} id - The resource ID
     * @param {Object} data - The data to send
     * @returns {Promise} - The axios promise
     */
    customAction: (id, data) => {
      return apiService.post(`${endpoint}/${id}/action`, data);
    }
  };
};

export default createTemplateService;

/* 
HOW TO USE THIS TEMPLATE:

1. Copy this file and rename it to your service name, e.g., product.service.js
2. Replace createTemplateService with your service name, e.g., createProductService
3. Update the endpoint to match your API endpoint, e.g., '/products'
4. Modify, add, or remove methods as needed for your specific service
5. Import and export your service in the index.js file:

   // In index.js
   import createProductService from './product.service';
   export const productService = createProductService();

6. Use the service in your components:

   // In your component
   import { productService } from '../services';
   
   // Example usage
   productService.getAll()
     .then(response => {
       console.log(response.data);
     })
     .catch(error => {
       console.error(error);
     });
*/
