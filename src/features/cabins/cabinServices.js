import supabase, { supabaseUrl } from "../../services/supabase";

const storage = "/storage/v1/object/public/cabin-images//";

export async function getCabins() {
  const response = await fetch("http://127.0.0.1:8000/api/cabins", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.getItem("auth-token"),
    },
    // body: JSON.stringify(cabinRow),
    // credentials: "include",
  });

  const data = await response.json();

  if (data.errors) {
    throw new Error(`${data.message}`);
  }
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  return data.data;
}

export async function insertCabin(cabinRow) {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/admin/cabins/store",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("auth-token"),
        },
        body: cabinRow,
        credentials: "include",
      },
    );

    const data = await response.json();

    if (data.errors) {
      throw new Error(`error! : ${data.message}`);
    }

    return data;
  } catch (error) {
    throw error; // Re-throw if you want to handle it in the calling function
  }
}

export async function deleteCabin(cabinId) {
  const response = await fetch(
    "http://127.0.0.1:8000/api/admin/cabins/delete/" + cabinId,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("auth-token"),
      },
      // body: cabin,
      // credentials: "include",
    },
  );
  const data = await response.json();
  if (data.errors) {
    throw new Error(`error! : ${data.message}`);
  }

  return data;
}

export async function updateCabinApi(cabin) {
  const response = await fetch(
    "http://127.0.0.1:8000/api/admin/cabins/update",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("auth-token"),
      },
      body: cabin,
      credentials: "include",
    },
  );
  const data = await response.json();
  if (data.errors) {
    throw new Error(`error! : ${data.message}`);
  }

  return data;
}

export async function duplicateCabin(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/admin/cabins/duplicate/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("auth-token"),
        },
      },
    );

    const data = await response.json();
    if (data.errors) {
      throw new Error(`${data.message}`);
    }

    console.log(data);
    return data;
  } catch (error) {
    throw error; // Re-throw if you want to handle it in the calling function
  }
}
