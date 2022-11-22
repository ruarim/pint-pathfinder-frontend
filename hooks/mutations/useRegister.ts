import { useMutation } from "@tanstack/react-query";
import { RegisterResponse, RegisterUserMutationData } from "../../@types";
import client from "../../axios/apiClient";

export const useRegistser = () => {
  return useMutation<RegisterResponse, unknown, RegisterUserMutationData>({
    mutationFn: (data) => {
      return client.post("register", data);
    },
  });
};
