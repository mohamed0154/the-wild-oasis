import supabase, { supabaseUrl } from "../../services/supabase";

export async function UpdateUser({ fullName, avatar, password }) {
  console.log(password);
  let updateData;

  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: errorStorage } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (errorStorage) throw new Error(errorStorage.message);

  const { data: updatedUser, error: userError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars//${fileName}`,
      },
    });
  if (userError) throw new Error(userError.message);
  return updatedUser;
}
