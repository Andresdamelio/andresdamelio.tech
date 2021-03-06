// Generated by https://quicktype.io

export interface Resume {
  id: number;
  educations: Education[];
  experiences: Experience[];
  courses: Course[];
}

export interface Course {
  id: number;
  platform: string;
  date: string;
  credential: string;
  name: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Education {
  id: number;
  institute: string;
  from: string;
  to: string;
  degree: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Experience {
  id: number;
  position: string;
  from: string;
  to: undefined | string;
  company: string;
  description: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}
