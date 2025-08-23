// Test script to verify deployment
// Run this after deployment to check if everything works

const testEndpoints = async () => {
  const baseUrl = process.env.VERCEL_URL || 'http://localhost:5000';
  
  console.log('🧪 Testing deployment endpoints...');
  console.log(`📍 Base URL: ${baseUrl}`);
  
  const endpoints = [
    '/api/health',
    '/api/',
    '/'
  ];
  
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`);
      const data = await response.json();
      console.log(`✅ ${endpoint}: ${response.status} - ${data.message || data.status || 'OK'}`);
    } catch (error) {
      console.log(`❌ ${endpoint}: Error - ${error.message}`);
    }
  }
  
  console.log('\n🎯 Deployment test completed!');
};

// Run test if this file is executed directly
if (typeof window === 'undefined') {
  testEndpoints();
}

module.exports = { testEndpoints };
