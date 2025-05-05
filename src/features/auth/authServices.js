import supabase from "../../services/supabase";

export async function login({ email, password }) {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await response.json();
    if (data.errors) {
      throw new Error(`error! : ${data.message}`);
      // return data.errors;
    }

    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error; // Re-throw if you want to handle it in the calling function
  }
}

export async function checkAuth() {
  const response = await fetch("http://127.0.0.1:8000/api/check-auth", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: localStorage.getItem("auth-token"),
    },
    credentials: "include",
  });

  const data = await response.json();

  if (data?.message) return data;
  if (!response.ok) {
    throw new Error(`Http error! status: ${response.status}`);
  }
  return data;
}

export async function signup(userDataStore) {
  const response = await fetch("http://127.0.0.1:8000/api/admin/addAdmin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("auth-token"),
    },
    body: userDataStore,
    // credentials: "include",
  });
  const data = await response.json();
  if (data.errors) {
    throw new Error(`error! : ${data.message}`);
  }

  return data;
}
