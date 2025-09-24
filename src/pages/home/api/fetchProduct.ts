
import { api } from "../../../shared/api";

export const fetchProduct = async () => {
  const response = await api.get("/product");
  console.log(response.data);
  return response.data.products
};
