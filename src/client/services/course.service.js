import createApiService from './api.service';
import { mockCourses, delay } from './mock-data';

// Flag to determine whether to use mock data or real API
// You can change this to false when your backend is ready
const USE_MOCK_DATA = true;

/**
 * Creates a course service for handling course-related API calls
 * @param {string} baseURL - The base URL for the API (optional)
 * @param {Object} options - Additional options for the API service (optional)
 * @returns {Object} - The course service object
 */
const createCourseService = (baseURL, options = {}) => {
  // Create the base API service
  const apiService = createApiService(baseURL, options);
  
  // Define the base endpoint for course-related operations
  const endpoint = '/course';

  // Return the course service object with methods
  return {
    /**
     * Get all courses
     * @param {Object} params - Query parameters (pagination, filtering, etc.)
     * @returns {Promise} - Promise that resolves with the courses data
     */
    getAll: async (params = {}) => {
      if (USE_MOCK_DATA) {
        // Simulate API delay
        await delay();
        
        // Apply filtering if provided in params
        let filteredCourses = [...mockCourses];
        
        if (params.category) {
          filteredCourses = filteredCourses.filter(course => 
            course.category.toLowerCase() === params.category.toLowerCase()
          );
        }
        
        if (params.level) {
          filteredCourses = filteredCourses.filter(course => 
            course.level.toLowerCase().includes(params.level.toLowerCase())
          );
        }
        
        if (params.search) {
          const searchTerm = params.search.toLowerCase();
          filteredCourses = filteredCourses.filter(course => 
            course.name.toLowerCase().includes(searchTerm) || 
            course.description.toLowerCase().includes(searchTerm) ||
            course.professor.toLowerCase().includes(searchTerm)
          );
        }
        
        // Apply pagination if provided
        if (params.page && params.limit) {
          const page = parseInt(params.page);
          const limit = parseInt(params.limit);
          const startIndex = (page - 1) * limit;
          const endIndex = page * limit;
          
          filteredCourses = filteredCourses.slice(startIndex, endIndex);
        }
        
        // Return in the same format as the API would
        return {
          data: {
            courses: filteredCourses,
            total: mockCourses.length
          }
        };
      }
      
      // Use real API if mock data is disabled
      return apiService.get(endpoint, params);
    },

    /**
     * Get a specific course by ID
     * @param {string|number} id - The course ID
     * @returns {Promise} - Promise that resolves with the course data
     */
    getById: async (id) => {
      if (USE_MOCK_DATA) {
        // Simulate API delay
        await delay();
        
        const course = mockCourses.find(course => course.id === parseInt(id));
        
        if (!course) {
          // Simulate 404 error
          throw {
            response: {
              status: 404,
              data: { message: 'Course not found' }
            }
          };
        }
        
        // Return in the same format as the API would
        return {
          data: { course }
        };
      }
      
      // Use real API if mock data is disabled
      return apiService.get(`${endpoint}/${id}`);
    },

    /**
     * Create a new course
     * @param {Object} data - The course data
     * @returns {Promise} - Promise that resolves with the created course data
     */
    create: async (data) => {
      if (USE_MOCK_DATA) {
        // Simulate API delay
        await delay();
        
        // Create a new course with an ID
        const newCourse = {
          ...data,
          id: mockCourses.length + 1
        };
        
        // In a real implementation, you would add this to the mockCourses array
        // mockCourses.push(newCourse);
        
        // Return in the same format as the API would
        return {
          data: { 
            course: newCourse,
            message: 'Course created successfully'
          }
        };
      }
      
      // Use real API if mock data is disabled
      return apiService.post(endpoint, data);
    },

    /**
     * Update a course (full update)
     * @param {string|number} id - The course ID
     * @param {Object} data - The updated course data
     * @returns {Promise} - Promise that resolves with the updated course data
     */
    update: async (id, data) => {
      if (USE_MOCK_DATA) {
        // Simulate API delay
        await delay();
        
        const courseIndex = mockCourses.findIndex(course => course.id === parseInt(id));
        
        if (courseIndex === -1) {
          // Simulate 404 error
          throw {
            response: {
              status: 404,
              data: { message: 'Course not found' }
            }
          };
        }
        
        // Update the course
        const updatedCourse = {
          ...mockCourses[courseIndex],
          ...data,
          id: parseInt(id) // Ensure ID remains the same
        };
        
        // In a real implementation, you would update the mockCourses array
        // mockCourses[courseIndex] = updatedCourse;
        
        // Return in the same format as the API would
        return {
          data: { 
            course: updatedCourse,
            message: 'Course updated successfully'
          }
        };
      }
      
      // Use real API if mock data is disabled
      return apiService.put(`${endpoint}/${id}`, data);
    },

    /**
     * Partially update a course
     * @param {string|number} id - The course ID
     * @param {Object} data - The partial course data to update
     * @returns {Promise} - Promise that resolves with the updated course data
     */
    patch: async (id, data) => {
      if (USE_MOCK_DATA) {
        // Simulate API delay
        await delay();
        
        const courseIndex = mockCourses.findIndex(course => course.id === parseInt(id));
        
        if (courseIndex === -1) {
          // Simulate 404 error
          throw {
            response: {
              status: 404,
              data: { message: 'Course not found' }
            }
          };
        }
        
        // Update the course
        const updatedCourse = {
          ...mockCourses[courseIndex],
          ...data,
          id: parseInt(id) // Ensure ID remains the same
        };
        
        // Return in the same format as the API would
        return {
          data: { 
            course: updatedCourse,
            message: 'Course updated successfully'
          }
        };
      }
      
      // Use real API if mock data is disabled
      return apiService.patch(`${endpoint}/${id}`, data);
    },

    /**
     * Delete a course
     * @param {string|number} id - The course ID
     * @returns {Promise} - Promise that resolves with the deletion result
     */
    delete: async (id) => {
      if (USE_MOCK_DATA) {
        // Simulate API delay
        await delay();
        
        const courseIndex = mockCourses.findIndex(course => course.id === parseInt(id));
        
        if (courseIndex === -1) {
          // Simulate 404 error
          throw {
            response: {
              status: 404,
              data: { message: 'Course not found' }
            }
          };
        }
        
        // In a real implementation, you would remove from the mockCourses array
        // mockCourses.splice(courseIndex, 1);
        
        // Return in the same format as the API would
        return {
          data: { 
            message: 'Course deleted successfully'
          }
        };
      }
      
      // Use real API if mock data is disabled
      return apiService.delete(`${endpoint}/${id}`);
    },

    /**
     * Get courses by category
     * @param {string} category - The category to filter by
     * @returns {Promise} - Promise that resolves with the filtered courses
     */
    getByCategory: async (category) => {
      if (USE_MOCK_DATA) {
        // Simulate API delay
        await delay();
        
        // Filter courses by category
        const filteredCourses = mockCourses.filter(course => 
          course.category.toLowerCase() === category.toLowerCase()
        );
        
        // Return in the same format as the API would
        return {
          data: {
            courses: filteredCourses,
            total: filteredCourses.length
          }
        };
      }
      
      // Use real API if mock data is disabled
      return apiService.get(`${endpoint}/category/${category}`);
    },

    /**
     * Get featured courses
     * @param {number} limit - Number of courses to return
     * @returns {Promise} - Promise that resolves with the featured courses
     */
    getFeatured: async (limit = 4) => {
      if (USE_MOCK_DATA) {
        // Simulate API delay
        await delay();
        
        // Get random courses as featured
        const shuffled = [...mockCourses].sort(() => 0.5 - Math.random());
        const featuredCourses = shuffled.slice(0, limit);
        
        // Return in the same format as the API would
        return {
          data: { 
            courses: featuredCourses
          }
        };
      }
      
      // Use real API if mock data is disabled
      return apiService.get(`${endpoint}/featured`, { limit });
    },

    /**
     * Search courses
     * @param {string} query - The search query
     * @returns {Promise} - Promise that resolves with the search results
     */
    search: async (query) => {
      if (USE_MOCK_DATA) {
        // Simulate API delay
        await delay();
        
        // Search courses by name, description, or professor
        const searchTerm = query.toLowerCase();
        const filteredCourses = mockCourses.filter(course => 
          course.name.toLowerCase().includes(searchTerm) || 
          course.description.toLowerCase().includes(searchTerm) ||
          course.professor.toLowerCase().includes(searchTerm)
        );
        
        // Return in the same format as the API would
        return {
          data: {
            courses: filteredCourses,
            total: filteredCourses.length
          }
        };
      }
      
      // Use real API if mock data is disabled
      return apiService.get(`${endpoint}/search`, { query });
    },

    /**
     * Enroll in a course
     * @param {string|number} courseId - The course ID
     * @param {string|number} userId - The user ID
     * @returns {Promise} - Promise that resolves with the enrollment result
     */
    enroll: async (courseId, userId) => {
      if (USE_MOCK_DATA) {
        // Simulate API delay
        await delay();
        
        const course = mockCourses.find(course => course.id === parseInt(courseId));
        
        if (!course) {
          // Simulate 404 error
          throw {
            response: {
              status: 404,
              data: { message: 'Course not found' }
            }
          };
        }
        
        // Return in the same format as the API would
        return {
          data: { 
            message: 'Enrolled successfully',
            courseId,
            userId
          }
        };
      }
      
      // Use real API if mock data is disabled
      return apiService.post(`${endpoint}/${courseId}/enroll`, { userId });
    }
  };
};

export default createCourseService;
