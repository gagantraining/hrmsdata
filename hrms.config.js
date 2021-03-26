module.exports = {
    apps : [{
      name        : "hrms-frontend",
      script      : "./client/src/Entryfile/Main.js",
      watch       : true,
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
       "NODE_ENV": "production"
      }
    },s
    {
      name       : "hrms-backend",
      script     : "./server/App.js",
      watch       : true,
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
        "NODE_ENV": "production"
      }
    }]
  }