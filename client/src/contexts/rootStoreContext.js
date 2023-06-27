import { createContext, useContext } from "react";

export const RootStoreContext = createContext(null)

export const useStores = () => {
  const context = useContext(RootStoreContext)

  return context
}