import { useQuery } from "@tanstack/react-query";
import { getGuests } from "../../services/apiUsers";

export function useGuests() {
  const { isPending, data: guests = {} } = useQuery({
    queryKey: ["guests"],
    queryFn: getGuests,
  });

  return { isPending, guests };
}
