export interface PhotographerProfileCreate {
  professional_name?: any;
  instagram_handle?: any;
  website?: any;
  equipment?: any;
  rates?: any;
  speciality?: any;
}

export interface PhotographerProfileResponse {
  professional_name?: any;
  instagram_handle?: any;
  website?: any;
  equipment?: any;
  rates?: any;
  speciality?: any;
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface PhotographerProfileUpdate {
  professional_name?: any;
  instagram_handle?: any;
  website?: any;
  equipment?: any;
  rates?: any;
  speciality?: any;
}

export interface Equipment {
  cameras: string[]
  lenses: string[]
  accessories: string[]
}