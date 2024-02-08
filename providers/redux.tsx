"use client";

import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";

interface ReduxProviderProps {
  children?: ReactNode;
}

export function Provider({ children }: ReduxProviderProps) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
