export interface User {
  username: string
  profile_picture: string
  is_photographer: boolean
  is_surfer: boolean
  id: string
  is_admin: boolean
  is_staff: boolean
  created_at: string
}
export interface UserCreate {
  username: string;
  profile_picture?: string | null;
  is_photographer: boolean;
  is_surfer: boolean;
  email: string;
  full_name: string;
  country_code: string;
  bio?: string | null;
  labels: string[];
  frequent_surf_breaks: string[];
  password: string;
}

export interface UserCreateResponse {
  username: string;
  profile_picture?: string | null;
  is_photographer: boolean;
  is_surfer: boolean;
  email: string;
  full_name: string;
  country_code: string;
  bio?: string | null;
  labels: string[];
  frequent_surf_breaks: string[];
  id: string;
  stripe_link?: string | null;
}

export interface UserDetail {
  username: string;
  profile_picture?: string | null;
  is_photographer: boolean;
  is_surfer: boolean;
  email: string;
  full_name: string;
  country_code: string;
  bio?: string | null;
  labels: string[];
  frequent_surf_breaks: string[];
  id: string;
}

export interface UserPublicResponse {
  username: string;
  profile_picture?: string | null;
  is_photographer: boolean;
  is_surfer: boolean;
  id: string;
  is_banned: boolean;
  is_admin: boolean;
  created_at: string;
}

export interface UserUpdate {
  email?: string | null;
  is_admin?: boolean | null;
  is_banned?: boolean | null;
}

export interface UserUpdateMe {
  email?: string;
  full_name?: string;
  profile_picture?: string;
  country_code?: string;
  bio?: string;
  labels?: string[];
  frequent_surf_breaks?: string[];
  is_photographer?: boolean;
  is_surfer?: boolean;
  password?: string;
}