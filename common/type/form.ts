import { Validate } from "react-hook-form";

export type FormRule = {
  required?: boolean;
  phone?: boolean;
  email?: boolean;
  whiteSpace?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  message?: string;
  validate?: Validate<any, any>;
};

export type FieldError = {
  [x: string]: any;
};

export type SelectDate = {
  fullDate: Date;
  day: number;
  month: number;
  year: number;
  date: number;
  type: "main" | "sub";
};

export type SelectOption = {
  label: string;
  value: string | number;
};

export type Options = {
  filter: SelectOption[];
};
