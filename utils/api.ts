import axios from "axios";

const API_BASE_URL = process.env.BASE_API_URL || "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token if available
export function setAuthToken(token: string | null) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
}

// Helper function to extract error message
function handleError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    throw new Error(
      error.response?.data?.message || "An unexpected error occurred"
    );
  }
  throw new Error("An unexpected error occurred");
}

// ----- AUTH -----
export async function login(username: string, password: string) {
  try {
    const { data } = await api.post("/auth/login", { username, password });
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

// ----- BLOG -----
export async function getBlogs() {
  try {
    const { data } = await api.get("/blogs");
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function createBlog(
  title: string,
  content: string,
  image: string,
  token: string
) {
  setAuthToken(token);
  try {
    const { data } = await api.post("/blogs", { title, content, image });
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function updateBlog(
  blogId: number,
  title: string,
  content: string,
  image: string,
  token: string
) {
  setAuthToken(token);
  try {
    const { data } = await api.put(`/blogs/${blogId}`, {
      title,
      content,
      image,
    });
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

// ----- PORTFOLIO -----
export async function getPortfolio() {
  try {
    const { data } = await api.get("/portfolio");
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function createPortfolio(
  title: string,
  description: string,
  image: string,
  token: string
) {
  setAuthToken(token);
  try {
    const { data } = await api.post("/portfolio", {
      title,
      description,
      image,
    });
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function updatePortfolio(
  portfolioId: number,
  title: string,
  description: string,
  image: string,
  token: string
) {
  setAuthToken(token);
  try {
    const { data } = await api.put(`/portfolio/${portfolioId}`, {
      title,
      description,
      image,
    });
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

// ----- PORTFOLIO -----
export async function getContactMessege() {
  try {
    const { data } = await api.get("/contact");
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function createContactMessege(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string
) {
  try {
    const { data } = await api.post("/contact", {
      firstName,
      lastName,
      email,
      phone,
      message,
    });
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}
