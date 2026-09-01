import { apiClient } from "@/lib/api/client";
import { SubscribeRequest, SubscribeResponse } from "../types";

export const newsletterApi = {
  /**
   * Subscribes a user to the newsletter via the advanced API client.
   * This acts as the Data Repository layer.
   */
  subscribe: async (data: SubscribeRequest): Promise<SubscribeResponse> => {
    // We mock the API call here for demonstration, but it uses the real advanced apiClient architecture
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.email.includes("error")) {
          reject(new Error("Simulated API error"));
        } else {
          resolve({ success: true, message: "Subscribed successfully" });
        }
      }, 1500);
    });
    
    // In a real app, this would be:
    // return apiClient.post<SubscribeResponse>("/api/newsletter/subscribe", data);
  },
};
