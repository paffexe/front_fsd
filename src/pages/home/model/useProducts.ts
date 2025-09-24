import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/fetchProduct";

export const useProducts = () => {
  // just return useQuery result
  return useQuery({
    queryKey: ["productKey"],
    queryFn: fetchProduct,
    retry: 0,
  });
};
