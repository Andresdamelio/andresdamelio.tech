import { Image } from 'interfaces';

export interface About {
  id: number;
  about: string;
  skills: Skill[];
}

export interface Skill {
  id: number;
  title: string;
  description: string;
  image: Image;
}
