import { axiosInstance } from "@/lib/axios";
import { Product } from "@/lib/type";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface UseCreateProductProps {
  onSuccess: (
    data: AxiosResponse<Product>,
    variables: Omit<Product, "id">,
    context: unknown
  ) => void;
}

export const useCreateProduct = ({ onSuccess }: UseCreateProductProps) => {
  return useMutation<AxiosResponse<Product>, Error, Omit<Product, "id">>({
    mutationKey: ["post.products"],
    mutationFn: async (body: Omit<Product, "id">) => {
      return await axiosInstance.post<Product>("/products", body);
    },
    onSuccess,
  });
};
