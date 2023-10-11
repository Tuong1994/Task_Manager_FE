"use client";

import React from "react";
import { useForm, FormProvider, FieldValues, SubmitHandler } from "react-hook-form";

export interface FormProps<M> extends React.FormHTMLAttributes<HTMLFormElement> {
  initialData: M;
  children?: React.ReactNode | React.ReactNode[];
  onFinish?: (formData: M) => void;
}

const Form = <M extends FieldValues>(
  { initialData, children, onFinish, autoComplete = "off", ...restProps }: FormProps<M>,
  ref: React.ForwardedRef<HTMLFormElement>
) => {
  const rhfMethods = useForm<M>({ values: initialData, mode: "all" });

  const onSubmit: SubmitHandler<M> = (formData: M) => onFinish?.(formData);

  return (
    <FormProvider {...rhfMethods}>
      <form ref={ref} {...restProps} autoComplete={autoComplete} onSubmit={rhfMethods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default React.forwardRef(Form);
