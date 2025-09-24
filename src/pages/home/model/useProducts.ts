import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/fetchProduct";

export const useProducts = () => {
  return useQuery({
    queryKey: ["productKey"],
    queryFn: fetchProduct,
    retry: 0,
  });
};
