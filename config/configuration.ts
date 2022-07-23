export default {
  controller: {
    host: process.env.ODL_HOST || 'localhost',
    port: process.env.ODL_PORT ? parseInt(process.env.ODL_PORT) : 8181,
    username: process.env.ODL_USERNAME || 'admin',
    password: process.env.ODL_PASSWORD || 'admin',
    https: process.env.ODL_HTTPS_ENABLED === 'true',
  },
};
