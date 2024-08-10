import { axiosInstance } from "@/lib/axios";
import { Product } from "@/lib/type";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface UseDeleteProductProps {
  onSuccess: (
    data: AxiosResponse<Product>,
    variables: number,
    context: unknown
  ) => void;
}

export const useDeleteProduct = ({ onSuccess }: UseDeleteProductProps) => {
  return useMutation<AxiosResponse<Product>, Error, number>({
    mutationKey: ["delete.product"],
    mutationFn: async (id: number) => {
      return await axiosInstance.delete<Product>(`/products/${id}`);
    },
    onSuccess,
  });
};
