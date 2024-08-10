import { axiosInstance } from "@/lib/axios";
import { Product } from "@/lib/type";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface UseFetchProductsProps {}

export const useFetchProducts = () => {
  return useQuery<AxiosResponse<Product[]>, Error>({
    queryKey: ["get.products"],
    queryFn: async () => {
      return await axiosInstance.get<Product[]>("/products");
    },
  });
};
