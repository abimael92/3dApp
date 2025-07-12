const config = {
  development: {
    backendUrl: "http://localhost:8080/api/v1/modelslab",
  },
  production: {
    backendUrl: "https://your-deployed-app.com/api/v1/modelslab",
  },
  get backendUrl() {
    return process.env.NODE_ENV === "production"
      ? this.production.backendUrl
      : this.development.backendUrl;
  },
};
export default config;

//   backendUrl: "http://localhost:8080/api/v1/huggingface",
// },
// production: {
//   backendUrl: "https://devswag.onrender.com/api/v1/huggingface",
// },



// const config = {
//   development: {
//     backendUrl: "http://localhost:8080/api/v1/dalle",
//   },
//   production: {
//     backendUrl: "https://devswag.onrender.com/api/v1/dalle",
//   },

// development: {
//   backendUrl: "http://localhost:8080/api/v1/replicate",
// },
// production: {
//   backendUrl: "https://devswag.onrender.com/api/v1/replicate",
// },

// };

// export default config;