import React, { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return <div className="fixed h-screen w-full">{children}</div>;
};

export default BaseLayout;
