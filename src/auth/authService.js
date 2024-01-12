export const login = (username, password) => {
  // Mock authentication logic
  if (username === "admin" && password === "password") {
    // In a real scenario, you would fetch a JWT token from your backend
    const token = "rudra.dev";
    return Promise.resolve(token);
  } else {
    return Promise.reject(new Error("Invalid credentials"));
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return Promise.resolve();
};
