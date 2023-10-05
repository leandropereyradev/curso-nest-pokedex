export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodbUri: process.env.MONGODB_URI,
  dbName: process.env.DB_NAME,
  port: process.env.PORT,
  defaultLimit: process.env.DEFAULT_LIMIT,
});
