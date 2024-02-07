"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import { ReactNode } from "react";

interface ReduxProviderProps {
  children?: ReactNode;
}

export function Provider({ children }: ReduxProviderProps) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
