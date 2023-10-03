import React from "react";

interface FormFooterProps {
  children?: React.ReactNode | React.ReactNode[];
}

const FormFooter: React.FC<FormFooterProps> = ({ children }) => {
  return <div className="form-footer">{children}</div>;
};

export default FormFooter;
