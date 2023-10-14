import { Staff } from "./staff";

export type SignIn = {
  account: string;
  password: string;
};

export type AuthInfo = SignIn & Staff;

export type Auth = {
  accessToken: string;
  isAuth: boolean;
  info: Omit<AuthInfo, "password">;
};
