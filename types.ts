export interface Position {
  id: string;
  areaOfInterest: AreaOfInterest;
  name: string;
  isFeatured: boolean;
  isArchived: boolean;
  shortDescription: string;
  longDescription: string;
  company: Company;
  availability: Availability;
  modality: Modality;
  location: Location;
};

export interface AreaOfInterest {
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

export interface User {
  id: string;
  clerkId: string;
  name: string;
  email: string;
  cvUrl?: string;
  phoneNumber?: number;
  linkedinUrl?: string;
  applications?: UserApplication[];
  createdAt?: Date;
  updatedAt?: Date;
}

export enum ApplicationStatus {
  APPROVED = 'APPROVED',
  DISAPPROVED = 'DISAPPROVED',
  HOLD = 'HOLD'
}

export interface UserApplication {
  id: string;
  userId: string;
  positionId: string;
  status: ApplicationStatus;
  createdAt: Date;
  updatedAt: Date;
}