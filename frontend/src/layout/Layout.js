import React from "react";
import Menu from "./Menu";
import Paths from "./Paths";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div className="container-fluid homepage-bgimage">
      <div className="row h-100">
        <div className="col-md-2 side-bar">
          <Menu />
        </div>
        <div className="col">
          <Paths />
        </div>
      </div>
    </div>
  );
}

export default Layout;