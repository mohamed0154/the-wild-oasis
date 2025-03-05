import supabase from "../../services/supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function checkAuth() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data } = await supabase.auth.getUser();
  return data?.user;
}

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });
  if (error) throw new Error(error);

  return data;
}
