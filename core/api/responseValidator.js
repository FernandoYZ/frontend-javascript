function validateJsonResponse(response) {
    if (!response || typeof response !== 'object') {
      throw new Error("Invalid JSON response");
    }
    return true;
  }
  
  export { validateJsonResponse };
  