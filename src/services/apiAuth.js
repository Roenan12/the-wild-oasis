import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession(); // get the data from local storage
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser(); // fetch current user

  console.log(data);

  if (error) throw new Error(error.message);

  return data?.user;
}
