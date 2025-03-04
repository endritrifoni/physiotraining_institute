# API Services

This directory contains service functions for making API calls using Axios. The services follow a consistent structure and provide common functionality for interacting with RESTful APIs.

## Structure

- `api.service.js` - Base service creator function that provides common functionality
- `user.service.js` - Example service for user-related API calls
- `template.service.js` - Template for creating new services
- `index.js` - Exports all services for easy importing

## Installation

Make sure Axios is installed in your project:

```bash
npm install axios
```

## Usage

### Importing Services

You can import services in your components like this:

```javascript
// Import a specific service instance
import { userService } from '../services';

// Or import the base service creator function
import { createApiService } from '../services';

// Or import everything
import services from '../services';
```

### Using Services

```javascript
// Example: Get all users
userService.getUsers()
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// Example: Create a user
userService.createUser({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123'
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// Example: Using async/await
async function fetchUser(id) {
  try {
    const response = await userService.getUser(id);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

### Creating a New Service

1. Copy the `template.service.js` file and rename it to your service name, e.g., `product.service.js`
2. Replace `createTemplateService` with your service name, e.g., `createProductService`
3. Update the endpoint to match your API endpoint, e.g., `/products`
4. Modify, add, or remove methods as needed for your specific service
5. Import and export your service in the `index.js` file:

```javascript
// In index.js
import createProductService from './product.service';
export const productService = createProductService();
```

### Custom Configuration

You can create service instances with custom configurations:

```javascript
import { createCustomService } from '../services';
import createProductService from '../services/product.service';

// Create a service with a custom base URL
const customProductService = createCustomService(
  createProductService,
  'https://api.example.com/v2',
  {
    timeout: 5000,
    headers: {
      'X-Custom-Header': 'value'
    }
  }
);
```

## API Service Methods

The API service object provides the following methods:

- `get(url, params, config)` - Performs a GET request
- `post(url, data, config)` - Performs a POST request
- `put(url, data, config)` - Performs a PUT request
- `patch(url, data, config)` - Performs a PATCH request
- `delete(url, config)` - Performs a DELETE request
- `all(requests)` - Performs multiple requests concurrently
- `spread(callback)` - Creates a callback that spreads the response array

## Authentication

The base service automatically adds an Authorization header to requests if a token is found in localStorage. You can modify this behavior in the `api.service.js` file.

## Error Handling

The base service includes error handling for common HTTP status codes. You can modify this behavior in the `api.service.js` file.

## Extending Services

You can extend existing services to add custom functionality:

```javascript
import { userService } from '../services';
import createApiService from '../services/api.service';

// Create a new API service
const apiService = createApiService();

// Create an extended user service with additional methods
const extendedUserService = {
  ...userService,
  
  // Add custom methods
  customMethod: () => {
    return apiService.get('/custom-endpoint');
  }
};
