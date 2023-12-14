// Swagger options
export const SWAGGER_OPTIONS = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Crash Simulation and Handling API',
      version: '1.0.0',
      description:
        'API documentation for simulating crashes and handling/returning them properly.',
      contact: {
        name: 'Orji Michael',
        email: 'orjimichael4886@gmail.com',
      },
    },
    servers: [
      { url: 'http://localhost:5000/api/v1', description: 'Development' },
      // { url: 'https://crash-json-placeholder-api.onrender.com/api/v1', description: 'Staging' },
      // { url: 'https://api.crashjsonplaceholder.com/api/v1', description: 'Production' },
    ],
    tags: [
      {
        name: 'Crash',
        description: 'Endpoints for simulating crashes.',
      },
    ],
  },
  apis: ['**/*.jsdoc.ts'], // Define paths to your API routes
};
