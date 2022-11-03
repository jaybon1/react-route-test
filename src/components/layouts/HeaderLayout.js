import Header from "components/commons/Header";
import React from "react";

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default HeaderLayout;
