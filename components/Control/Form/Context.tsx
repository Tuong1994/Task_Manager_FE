import React from "react";

export type FormItemContextState = {
  rhfName: string;
  rhfValue: any;
  isRhf: boolean;
  rhfError: boolean;
  rhfDisabled?: boolean;
  rhfOnChange?: (...event: any) => void;
  rhfOnBlur?: (...event: any) => void;
};

const FormItemContext = React.createContext<FormItemContextState>({
  rhfName: "",
  rhfValue: "",
  isRhf: false,
  rhfError: false,
  rhfDisabled: false,
});

export default FormItemContext;
