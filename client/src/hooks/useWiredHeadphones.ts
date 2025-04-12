import { useQuery } from "@tanstack/react-query"
import { fetchWiredHeadphones } from "../api/Headphones";

export const useWiredHeadphones = () => {
  const query = useQuery({
    queryKey: ['headphones', 'wired'],
    queryFn: fetchWiredHeadphones
   });

   const headphones = query.data;
   const { isFetching, isError } = query;

   return { headphones, isFetching, isError };
}