type AppConfig = {
    apiUrl: string;
    testWorkerIndex: string;
  };
  
  // Define configuration based on environment variables
  export const appConfig: AppConfig = {
    apiUrl: process.env.VITE_API_SWAGGER || "http://localhost:3000",
    testWorkerIndex: process.env.TEST_PARALLEL_INDEX || '',
  };
  