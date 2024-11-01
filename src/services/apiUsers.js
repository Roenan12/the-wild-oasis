import supabase from "./supabase";

export async function getGuests() {
  const { data, error } = await supabase.from("guests").select("id, fullName");

  if (error) {
    console.error(error);
    throw new Error("Guests not found");
  }

  return data;
}
