export const environment = {
    TESTING: false,
    PRODUCTION: false,
    DEVELOPMENT: false,
    DB: process.env.DB ? process.env.DB : "",
    PORT: process.env.PORT ? process.env.PORT : 8000,
    TEST_TOKEN: process.env.TEST_TOKEN ? process.env.TEST_TOKEN : "",
    API_URL: process.env.API_URL
      ? process.env.API_URL
      : "http://localhost:8000/api",
    AWS_S3_ACCESS_KEY_ID: process.env.AWS_S3_ACCESS_KEY_ID,
    AWS_S3_SECRET_ACCESS_KEY: process.env.AWS_S3_SECRET_ACCESS_KEY,
    AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,
  };
  
  // LOCAL_DB_USER=root
  // LOCAL_DB_PASSWORD=
  // LOCAL_DB_IP=127.0.0.1
  // LOCAL_DB=camachofire-dev-v4
  // LOCAL_PORT=8000
  