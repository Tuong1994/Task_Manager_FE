export enum ERole {
  STAFF = 1,
  ADMIN = 2,
}

export enum EGender {
  MALE = 1,
  FEMALE = 2,
}

export enum EPosition {
  FRONTEND = 1,
  BACKEND = 2,
  DESIGN = 3,
  PRODUCT = 4,
}

export type Staff = {
  id?: string;
  fullName: string;
  phone: string;
  email: string;
  gender: EGender;
  position: EPosition;
  role: ERole;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export type Auth = Staff & {
  account: string;
  password: string;
};
