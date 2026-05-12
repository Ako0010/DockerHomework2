const apiUrl = "http://localhost:5296/api";

export const authService = {
  login: async (credentials) => {
    const response = await fetch(`${apiUrl}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return response.json();
  },

  register: async (currentUser) => {
    const response = await fetch(`${apiUrl}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    });

    if (!response.ok) {
      throw new Error("Register failed");
    }

    return response.json();
  },
};

export default authService;