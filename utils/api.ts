import { UserUpdate } from "@/lib/types/interface";
import axios from "axios";

const API_BASE_URL = "https://bimasanjaya.vercel.app/api";

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

// ----- User -----
export async function getUser() {
  try {
    const { data } = await api.get("/user");
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function updateUser(userId: number, updatedData: UserUpdate) {
  try {
    const { data } = await api.patch(`/user/${userId}`, updatedData);
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function updateUserByPut(userId: number, updatedData: UserUpdate) {
  try {
    const { data } = await api.put(`/user/${userId}`, updatedData);
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

// ----- BLOG -----
export async function getBlogs(page = 1, limit = 10) {
  try {
    const { data } = await api.get(`/blog?page=${page}&limit=${limit}`);
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
    const { data } = await api.post(
      "/blog",
      { title, content, image },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
    const { data } = await api.put(
      `/blog/${blogId}`,
      { title, content, image },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function deleteBlog(blogId: number, token: string) {
  setAuthToken(token);
  try {
    const { data } = await api.delete(`/blog/${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error: unknown) {
    handleError(error);
  }
}

// ----- PORTFOLIO -----
export async function getPortfolio() {
  try {
    const { data } = await api.get("/portofolio");
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
    const { data } = await api.post("/portofolio", {
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
    const { data } = await api.put(`/portofolio/${portfolioId}`, {
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
