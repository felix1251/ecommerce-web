"use client";

import { store } from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";

interface ReduxProviderProps {
  children?: React.ReactNode;
}

export function Provider({ children }: ReduxProviderProps) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
