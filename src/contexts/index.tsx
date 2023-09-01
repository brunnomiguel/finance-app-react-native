import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
