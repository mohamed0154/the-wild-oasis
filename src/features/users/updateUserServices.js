export async function UpdateUser(formData) {
  const response = await fetch(
    "http://127.0.0.1:8000/api/admin/updateProfileImage",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("auth-token"),
      },
      body: formData,
      // credentials: "include",
    },
  );
  const data = await response.json();
  if (data.errors) {
    throw new Error(`error! : ${data.message}`);
  }

  return data;
}
export async function updatePassword(password) {
  console.log(password);
  const response = await fetch(
    "http://127.0.0.1:8000/api/admin/updatePassword",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("auth-token"),
      },
      body: password,
      // credentials: "include",
    },
  );
  const data = await response.json();
  if (data.errors) {
    throw new Error(`error! : ${data.message}`);
  }

  return data;
}
