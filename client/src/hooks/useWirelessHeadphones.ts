import { useQuery } from "@tanstack/react-query"
import { fetchWirelessHeadphones } from "../api/Headphones";
import { UseHeadphonesResult } from "./UseHeadphonesResult";

export const useWirelessHeadphones = () => {
  const query = useQuery({
    queryKey: ['headphones', 'wireless'],
    queryFn: fetchWirelessHeadphones
  });

  const result: UseHeadphonesResult = { ...query };
  return result;
}