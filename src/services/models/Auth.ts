export interface ForgotPasswordRequest {
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type?: string;
}

export interface MeUpdate {
  email?: any;
  full_name?: any;
  profile_picture?: any;
  country_code: any;
  bio?: any;
  labels?: any;
  frequent_surf_breaks?: string[];
  is_photographer?: any;
  is_surfer?: any;
  password?: any;
}

export interface OnboardingStatusResponse {
  stripe_account_id: string;
  is_onboarded: boolean;
  onboarding_url: any;
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface RefreshTokenResponse {
  access_token: string;
  token_type?: string;
}

export interface ResetPasswordRequest {
  reset_token: string;
  new_password: string;
}
