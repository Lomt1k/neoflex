import { useQuery } from "@tanstack/react-query"
import { fetchWiredHeadphones } from "../api/Headphones";
import { UseHeadphonesResult } from "./UseHeadphonesResult";

export const useWiredHeadphones = () => {
  const query = useQuery({
    queryKey: ['headphones', 'wired'],
    queryFn: fetchWiredHeadphones
  });

  const result: UseHeadphonesResult = { ...query };
  return result;
}