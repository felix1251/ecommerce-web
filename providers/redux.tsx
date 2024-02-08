"use client";

import { store } from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";

interface IReduxProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FunctionComponent<IReduxProviderProps> = ({
  children,
}) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
