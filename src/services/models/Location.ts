export interface ContinentResponse {
  id: string;
  name: string;
  countries?: any[];
}

export interface CountryResponse {
  id: string;
  name: string;
  regions?: any[];
}

export interface RegionBase {
  id: string;
  name: string;
}

export interface SurfBreakResponse {
  id: string;
  name: string;
  break_type: string;
}
