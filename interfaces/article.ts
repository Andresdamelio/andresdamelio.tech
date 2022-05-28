import { Category, Image } from 'interfaces';

export interface Article {
  id:                number;
  name:              null;
  content:           string;
  created_at:        string;
  updated_at:        string;
  title:             string;
  category:          Category;
  slug:              string;
  short_description: string;
  published_at:      string;
  image:             Image;
}

