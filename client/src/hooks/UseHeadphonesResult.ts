import { Headphones } from "../api/Headphones";

export interface UseHeadphonesResult {
  data: Headphones[] | undefined,
  isFetching: boolean,
  isError: boolean,
}
