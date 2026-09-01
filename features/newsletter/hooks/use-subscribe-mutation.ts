import { useMutation } from "@tanstack/react-query";
import { newsletterService } from "../services/newsletter.service";

export const useSubscribeMutation = () => {
  return useMutation({
    mutationFn: (email: string) => newsletterService.subscribeUser(email),
  });
};
