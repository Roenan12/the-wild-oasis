import supabase from "./supabase";

export async function getGuests() {
  const { data, error } = await supabase
    .from("guests")
    .select("id, fullName, email, nationalID, nationality, countryFlag");

  if (error) {
    console.error(error);
    throw new Error("Guests not found");
  }

  return data;
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase
    .from("guests")
    .insert([{ ...newGuest }])
    .select();

  if (error) {
    //console.error(error);
    throw new Error("Guests could not be created");
  }

  return data;
}
