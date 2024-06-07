import React, { FunctionComponent, PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import dynamic from "next/dynamic";
const Header = dynamic(() => import('@/components/Header'), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });
type MainLayoutProps = {
  children?:React.ReactNode
};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = ({children}) => {
  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
        <Header />
        { children }
    </main>
  );
};
