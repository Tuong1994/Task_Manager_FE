"use client";

import React from "react";
import { Controller, useController, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { EMAIL_REGEX, PHONE_REGEX } from "@/common/constant/regex";
import { FieldError, FormRule } from "@/common/type/form";
import FormItemContext, { FormItemContextState } from "./Context";
import NoteMessage from "@/components/UI/NoteMessage";

interface FormItemProps {
  name: string;
  rules?: FormRule[];
  children?: React.ReactNode | React.ReactNode[];
}

const FormItem: React.FC<FormItemProps> = ({ children, rules, name = "" }) => {
  const formMethods = useFormContext();

  const {
    field: { name: fieldName, value, onChange, onBlur },
    fieldState: { invalid },
    formState: { errors },
  } = useController({ name });

  const initialValue: FormItemContextState = {
    rhfValue: value,
    rhfName: fieldName,
    rhfError: invalid,
    isRhf: true,
    rhfOnChange: onChange,
    rhfOnBlur: onBlur,
  };

  const getRules = () => {
    const fieldRule: FieldError = {};

    if (!rules) return fieldRule;

    if (!rules.length) return fieldRule;

    rules.forEach((rule) => {
      if (rule.required) fieldRule.required = { value: rule.required, message: rule.message };

      if (rule.email) fieldRule.pattern = { value: EMAIL_REGEX, message: rule.message };

      if (rule.phone) fieldRule.pattern = { value: PHONE_REGEX, message: rule.message };

      if (rule.max) fieldRule.max = { value: rule.max, message: rule.message };

      if (rule.min) fieldRule.min = { value: rule.min, message: rule.message };

      if (rule.maxLength) fieldRule.maxLength = { value: rule.maxLength, message: rule.message };

      if (rule.minLength) fieldRule.minLength = { value: rule.minLength, message: rule.message };
    });

    return fieldRule;
  };

  return (
    <FormItemContext.Provider value={initialValue}>
      <div className="form-item">
        <Controller
          name={name}
          control={formMethods.control}
          rules={{ ...getRules() }}
          render={() => <React.Fragment>{children}</React.Fragment>}
        />

        {errors[fieldName] && (
          <ErrorMessage
            name={fieldName}
            errors={errors}
            render={(error) => <NoteMessage type="error" textStyle="italic" message={error.message} />}
          />
        )}
      </div>
    </FormItemContext.Provider>
  );
};

export default FormItem;
