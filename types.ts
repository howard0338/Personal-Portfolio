export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  link?: string;
  tags?: string[];
}

export interface CoverArt {
  id: string;
  journal: string;
  year: number;
  imageUrl: string;
  caption?: string;
  publicationId: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  imageUrl: string;
}

export interface GalleryPhoto {
  id: string;
  imageUrl: string;
  caption?: string;
}

export interface Profile {
  name: string;
  role: string;
  institution: string;
  email: string;
  address: string;
  addressZh: string;
  googleScholarUrl: string;
  linkedinUrl: string;
  bio: string;
  headshotUrl: string; 
  skills?: string[]; // Added skills field
}