import supabase from "../../services/supabase";

export async function showBookings() {
  let { data: bookings, error } = await supabase
    .from("bookings")
    .select("*, cabins(name),guests(full_name)");
  if (error) throw new Error(error.message);

  return bookings;
}
export async function showBooking(id) {
  let { data: booking, error } = await supabase
    .from("bookings")
    .select("*, cabins(name),guests(full_name,email,national_id)")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);

  return booking;
}
export async function deleteBooking(id) {
  console.log(id);
  const { data: booking, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  return booking;
}
