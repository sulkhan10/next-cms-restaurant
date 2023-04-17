import React from "react";
import SidebarMenu from "../molecules/SidebarMenu.js";
import SidebarProfile from "../molecules/SidebarProfile";

function Sidebar() {
  return (
    <div className="w-full max-w-[250px] h-screen bg-gray-50  overflow-auto scrollbar-hide flex flex-col justify-between border-r-2" >
      <div className="pb-2 scrollbar-hide">
        <SidebarMenu />
      </div>
      <div className="pb-2 scrollbar-hide">
      <SidebarProfile />
      </div>
    </div>
  );
}

export default Sidebar;
