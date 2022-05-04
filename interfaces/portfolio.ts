import { Image } from 'interfaces';

export interface Project {
  id: number;
  name: string;
  description: string;
  fromDate: null;
  toDate: null;
  date: string;
  category: Category;
  slug: string;
  url: string;
  short_description: string;
  contributions: string;
  image: Image;
  gallery: Image[];
  thumbnail: Thumbnail;
  technologies: Technology[];
}

export interface ProjectShort {
  id: number;
  name: string;
  slug: string;
  category: Category;
  thumbnail: Thumbnail;
}

export interface Category {
  id: number;
  name: string;
  description: null;
  activeBlog: boolean;
  activeProjects: boolean;
}

export interface Technology {
  id: number;
  name: string;
}

export interface Thumbnail {
  id: number;
  alternativeText: string;
  url: string;
}
