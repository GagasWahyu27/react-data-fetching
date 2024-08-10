import { axiosInstance } from "@/lib/axios";
import { Product } from "@/lib/type";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface UseEditProductProps {
  onSuccess: (
    data: AxiosResponse<Product>,
    variables: Product,
    context: unknown
  ) => void;
}

export const useEditProduct = ({ onSuccess }: UseEditProductProps) => {
  return useMutation<AxiosResponse<Product>, Error, Product>({
    mutationKey: ["edit.product"],
    mutationFn: async (body: Product) => {
      return await axiosInstance.patch<Product>(`/products/${body.id}`, body);
    },
    onSuccess,
  });
};
