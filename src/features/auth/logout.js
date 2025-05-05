import supabase from "../../services/supabase";

export async function logout() {
  const response = await fetch("http://127.0.0.1:8000/api/logout", {
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
