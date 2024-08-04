const apiClient = {
  async request(url, options = {}) {
      try {
          const response = await fetch(url, options);
          const data = await response.json();
          return data;
      } catch (error) {
          console.error("API request error:", error);
          throw error;
      }
  },
};

export default apiClient;