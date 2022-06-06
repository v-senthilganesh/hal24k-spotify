import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Player from "../components/Player";

type CoreLayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const CoreLayout = ({ children }: CoreLayoutProps) => {
  return (
    <div className="main">
      <SideBar />
      <div className="main__content">
        <Header />
        <div className="main__content__child">{children}</div>
      </div>
      <Player />
    </div>
  );
};

export default CoreLayout;
