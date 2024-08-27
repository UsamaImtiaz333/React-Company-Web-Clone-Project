import React from "react";
import SideNavBar from "./SideNavBar";

const DashboardLayout = ({ childComponent }) => {
  return (
    <div className="flex flex-row items-start gap-8">
      <SideNavBar />
      {childComponent}
    </div>
  );
};

export default DashboardLayout;
