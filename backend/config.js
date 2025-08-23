// Configuration file for the backend
module.exports = {
  // MongoDB Configuration
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb+srv://dhara:dhara123@cluster1.r3h1ej2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'folk-art-platform',
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }
  },

  // JWT Configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'dhara-folk-art-super-secret-jwt-key-2025',
    expiresIn: '7d'
  },

  // Server Configuration
  server: {
    port: process.env.PORT || 5000,
    environment: process.env.NODE_ENV || 'development'
  },

  // CORS Configuration
  cors: {
    origin: [
      'http://localhost:3000',
      'https://localhost:3000',
      process.env.FRONTEND_URL,
      process.env.CORS_ORIGIN
    ].filter(Boolean),
    credentials: true,
    optionsSuccessStatus: 200
  }
};
