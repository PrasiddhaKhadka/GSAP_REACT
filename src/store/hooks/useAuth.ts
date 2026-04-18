import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "./useAuthStore.js";
import httpClient from "../lib/http.js";

type LoginPayload = {
  username: string;
  password: string;
};

export const useAuthLogin = () => {
    const { login } = useAuthStore()
  return useMutation({
    mutationFn: async (data: LoginPayload) => {
      const resp = await httpClient.post("/login", {
        username: data.username,
        password: data.password,
      });

    //   console.log(1,resp);
    //   console.log(2,resp.data);
      return resp.data;
    },

    onSuccess: (logger) => {
    //   console.log(
    //     "HERE IS IT FROM THE USE AUTH LOGIN ----> USE MUTATION"
    //   );
    //   console.log(logger);
    //   console.log(logger.accessToken)

        login(logger.accessToken)

        useAuthStore.getState().setUser(logger)


        //  queryClient.setQueryData(['customer'],data.customer)

    },
  });
};