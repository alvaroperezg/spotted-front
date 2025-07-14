import { useQuery } from "@tanstack/react-query";
import { getOnboarding } from "@/services/api/user";
import type { OnboardingStatusResponse } from "@/services/models/User";

export const useGetOnboarding = () =>
  useQuery<OnboardingStatusResponse>({
    queryKey: ["onboarding"],
    queryFn: getOnboarding,
  });
