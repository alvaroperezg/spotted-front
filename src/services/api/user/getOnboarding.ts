import { httpClient } from "../httpClient";
import type { OnboardingStatusResponse } from "@/services/models/User";

export const getOnboarding = async (): Promise<OnboardingStatusResponse> => {
  const response = await httpClient.get("/api/v1/users/me/onboarding");
  return response.data;
};