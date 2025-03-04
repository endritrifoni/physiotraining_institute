import createApiService from './api.service';
import createUserService from './user.service';
import createCourseService from './course.service';

// Export the base API service creator
export { createApiService };

// Export specific service instances
export const userService = createUserService();
export const courseService = createCourseService();

// You can add more service exports here as you create them
// For example:
// import createProductService from './product.service';
// export const productService = createProductService();

/**
 * Create a custom service instance with specific configuration
 * This is a helper function to create service instances with custom configurations
 * 
 * @param {Function} serviceCreator - The service creator function
 * @param {string} baseURL - The base URL for the API (optional)
 * @param {Object} options - Additional options for the API service (optional)
 * @returns {Object} - The service instance
 */
export const createCustomService = (serviceCreator, baseURL, options) => {
  return serviceCreator(baseURL, options);
};

// Default export for backward compatibility
export default {
  createApiService,
  userService,
  courseService,
  createCustomService
};
