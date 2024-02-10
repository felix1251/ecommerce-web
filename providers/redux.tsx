"use client";

import { store } from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

interface IReduxProviderProps {
  children: React.ReactNode;
}

let persistor = persistStore(store);

export const Provider: React.FunctionComponent<IReduxProviderProps> = ({
  children,
}: IReduxProviderProps) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </ReduxProvider>
  );
};
