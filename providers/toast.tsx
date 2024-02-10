"use client";

import { Toaster } from "react-hot-toast";

interface IToastProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FunctionComponent<IToastProviderProps> = ({
  children,
}: IToastProviderProps) => {
  return (
    <>
      <Toaster position="bottom-right" />
      {children}
    </>
  );
};
