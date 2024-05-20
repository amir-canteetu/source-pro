import { AuthProvider } from "@refinedev/core";

export const authProvider: AuthProvider = {
    check: async () => {
      const token = localStorage.getItem("jwt_token");
      return { authenticated: Boolean(token) };
    },
      // login method receives an object with all the values you've provided to the useLogin hook.
  login: async ({ email, password }) => {
    const response = await fetch(
      "http://localhost:3000/api/auth/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("jwt_token", data.token);
      return { success: true };
    }

    return { success: false };
  },
  logout: async () => {
    localStorage.removeItem("jwt_token");
    // Redirect to login page
    window.location.href = "/api/auth/login";
    return { success: true };
  },
    onError: async (error) => { throw new Error("Not implemented"); },
    register: async ({ email, password }) => {
      const response = await fetch(
          "http://localhost:3000/api/auth/register",
          {
              method: "POST",
              body: JSON.stringify({ email, password }),
              headers: {
                  "Content-Type": "application/json",
              },
          },
      );

      const data = await response.json();

      if (response.ok) {
          return { success: true, message: data.message };
      }

      return { success: false, message: data.message || 'Registration failed' };
  },
    forgotPassword: async (params) => { throw new Error("Not implemented"); },
    updatePassword: async (params) => { throw new Error("Not implemented"); },
    getIdentity: async () => { throw new Error("Not implemented"); },
    getPermissions: async () => { throw new Error("Not implemented"); },
};