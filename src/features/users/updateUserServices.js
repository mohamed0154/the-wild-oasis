import { serverUrl } from "../../services/server-url";

export async function UpdateUser(formData) {
  const response = await fetch(`${serverUrl}/api/admin/updateProfileImage`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("auth-token"),
    },
    body: formData,
    // credentials: "include",
  });
  const data = await response.json();
  if (data.errors) {
    throw new Error(`error! : ${data.message}`);
  }

  return data;
}
export async function updatePassword(password) {
  console.log(password);
  const response = await fetch(`${serverUrl}/api/admin/updatePassword`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("auth-token"),
    },
    body: password,
  });
  const data = await response.json();
  if (data.errors) {
    throw new Error(`error! : ${data.message}`);
  }

  return data;
}
