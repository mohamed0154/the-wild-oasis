import supabase from "../../services/supabase";

export async function getSettings() {
  let { data: cabins, error } = await supabase
    .from("settings")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) throw new Error(error);

  return cabins;
}
export async function updateSettingsApi(row) {
  const { data, error } = await supabase
    .from("settings")
    .update(row)
    .eq("id", 1)
    .select();

  if (error) throw new Error(error);
  return data;
}
