import supabase, { supabaseUrl } from "../../services/supabase";

const storage = "/storage/v1/object/public/cabin-images//";

export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error(error);

  return cabins;
}

export async function insertCabin(cabinRow) {
  // const img = cabinRow.image.replace("/", "");
  const imgStatus = cabinRow.image.startsWith(supabaseUrl);
  const imagePath = imgStatus
    ? cabinRow.image
    : `${supabaseUrl}${storage}${cabinRow.image}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabinRow, image: imagePath }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}
export async function deleteCabin(cabinId) {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", cabinId);

  if (error) throw new Error(error.message);

  return data;
}
export async function updateCabinApi(cabin) {
  const imgStatus = cabin.image.startsWith(supabaseUrl);
  const imagePath = imgStatus
    ? cabin.image
    : `${supabaseUrl}${storage}${cabin.image}`;
  const { data, error } = await supabase
    .from("cabins")
    .update({ ...cabin, image: imagePath })
    .eq("id", cabin.id)
    .select();

  if (error) throw new Error(error);

  return data;
}
