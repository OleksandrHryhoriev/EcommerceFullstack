import React from "react";

const Sidebar = () => {
   return (
      <div className="bg-(--secondary-background) w-70 py-8 px-4 flex flex-col gap-4">
         <div className="w-full">Logo + minimizeBtn</div>
         <div className="w-full">Company Logo</div>
         <nav className="w-full flex-1">Navbar</nav>
      </div>
   );
};

export default Sidebar;
