import React from "react";

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
}

export type MenuItem = {
  id: string;
  path?: string;
  label: React.ReactNode | React.ReactNode[];
  icon?: React.ReactNode | React.ReactNode[];
};
