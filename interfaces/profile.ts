import { ReactElement } from 'react';

export interface LayoutProps {
  children: ReactElement[] | ReactElement;
  banner: Banner,
  profile: Profile
}

export interface Profile {
  id:            number;
  name:          string;
  lastname:      string;
  title:         string;
  profession:    string;
  email:         string;
  about:         null;
  location:      string;
  created_at:    string;
  updated_at:    string;
  published_at:  string;
  image:         Banner;
  curriculum:    Banner;
  banner:        Banner;
  social_medias: SocialMedia[];
}

export interface Banner {
  id:                number;
  name:              string;
  alternativeText:   string;
  caption:           string;
  width:             number | null;
  height:            number | null;
  formats:           Formats | null;
  hash:              string;
  ext:               string;
  mime:              string;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: ProviderMetadata;
  created_at:        string;
  updated_at:        string;
}

export interface Formats {
  large:     Large;
  small:     Large;
  medium:    Large;
  thumbnail: Large;
}

export interface Large {
  ext:               string;
  url:               string;
  hash:              string;
  mime:              string;
  name:              string;
  path:              null;
  size:              number;
  width:             number;
  height:            number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id:     string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = "image",
}

export interface SocialMedia {
  id:           number;
  name:         string;
  url:          string;
  username:     null;
  icon:         string;
  created_at:   string;
  updated_at:   string;
  published_at: string;
}
