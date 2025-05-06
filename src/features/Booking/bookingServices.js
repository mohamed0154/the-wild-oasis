import { serverUrl } from "../../services/server-url";

export async function showBookings() {
  const response = await fetch(`${serverUrl}/api/admin/bookings`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("auth-token"),
    },
    // body: formData,
    // credentials: "include",
  });
  const data = await response.json();
  if (data.errors) {
    throw new Error(`error! : ${data.message}`);
  }

  return data.data;
}

export async function showBooking(id) {
  const response = await fetch(`${serverUrl}/api/booking/${id}`, {
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

export async function deleteBooking(id) {
  const response = await fetch(`${serverUrl}/api/admin/bookings/delete/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("auth-token"),
    },
  });
  const data = await response.json();
  if (data.errors) {
    throw new Error(`error! : ${data.message}`);
  }

  return data;
}
