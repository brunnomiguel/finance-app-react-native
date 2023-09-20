import { Fragment, ReactNode } from "react";
import Header from "../Header";

interface IlayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: IlayoutProps) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
