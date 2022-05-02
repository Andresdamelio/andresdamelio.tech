import { ReactElement } from 'react';

export interface LayoutProps {
  children: ReactElement[] | ReactElement;
  banner: Image,
  profile: Profile
}

export interface Profile {
  id:            number;
  name:          string;
  lastname:      string;
  title:         string;
  profession:    string;
  location:      string;
  image:         Image;
  curriculum:    Curriculum;
  banner:        Image;
  social_medias: SocialMedia[];
}

export interface Image {
  id:                number;
  url:              string;
  alternativeText:   string;
}

export interface Curriculum {
  id:                number;
  url:               string;
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
