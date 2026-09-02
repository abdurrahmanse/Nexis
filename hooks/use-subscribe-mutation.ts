import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { newsletterService } from "@/services/newsletter.service";
import { SubscribeResponse } from "@/types/newsletter.types";

export const useSubscribeMutation = (
  options?: Omit<UseMutationOptions<SubscribeResponse, Error, string>, "mutationFn">
) => {
  return useMutation({
    mutationFn: (email: string) => newsletterService.subscribeUser(email),
    ...options,
  });
};
