import supabase from "../../services/supabase";

export async function getSettings() {
  const response = await fetch("http://127.0.0.1:8000/api/admin/settings", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("auth-token"),
    },
  });
  const data = await response.json();
  if (data.errors) {
    throw new Error(`error! : ${data.message}`);
  }

  return data.data;
}
export async function updateSettingsApi(row) {
  const response = await fetch(
    "http://127.0.0.1:8000/api/admin/settings/update",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("auth-token"),
      },
      body: row,
      credentials: "include",
    },
  );

  const data = await response.json();
  console.log(data);
  if (data.errors) {
    throw new Error(`error! : ${data.message}`);
  }

  return data;
}
