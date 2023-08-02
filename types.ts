export interface Work {
  id: string;
  category: Category;
  name: string;
  isFeatured: boolean;
  shortDescription: string;
  longDescription: Text;
  technology: Technology;
  company: Company;
  availability: Availability;
  modality: Modality;
  location: Location;
};

export interface Category {
  id: string;
  name: string;
};

export interface Technology {
  id: string;
  name: string;
};

export interface Company {
  id: string;
  name: string;
};

export interface Availability {
  id: string;
  name: string;
};

export interface Modality {
  id: string;
  name: string;
};

export interface Location {
  id: string;
  name: string;
};
