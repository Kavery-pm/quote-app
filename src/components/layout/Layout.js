import React from "react";
import MainNavigation from "./Main-navigation";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation>
        <main className={classes.main}>{props.children}</main>
      </MainNavigation>
    </React.Fragment>
  );
};
export default Layout;
