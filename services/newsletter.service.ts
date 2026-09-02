import { newsletterRepository } from "@/repositories/newsletter.repository";
import { SubscribeRequest, SubscribeResponse } from "@/types/newsletter.types";

export const newsletterService = {
  /**
   * Service layer handling business logic, validation, and data transformation
   * before delegating to the repository.
   */
  async subscribeUser(email: string): Promise<SubscribeResponse> {
    if (!email || !email.includes("@")) {
      throw new Error("Invalid email format");
    }

    const request: SubscribeRequest = {
      email: email.trim().toLowerCase(),
    };

    return newsletterRepository.subscribe(request);
  },
};
