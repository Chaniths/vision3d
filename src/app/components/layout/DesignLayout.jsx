// components/layouts/DesignLayout.jsx
import DesignNavbar from "../DesignNavbar";
export default function DesignLayout({ children }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <DesignNavbar />
      <main className="flex-grow overflow-hidden pt-[64px]">
        {" "}
        {/* adjust 64px to your navbar height */}
        {children}
      </main>
    </div>
  );
}
// "use client";

// import React, { useState } from "react";
// import DesignNavbar from "../DesignNavbar";

// export default function DesignLayout({ children }) {
//   const [viewMode, setViewMode] = useState("3D");

//   return (
//     <div className="flex flex-col h-screen overflow-hidden">
//       <DesignNavbar viewMode={viewMode} setViewMode={setViewMode} />
//       <main className="flex-grow overflow-hidden pt-[64px]">
//         {/* Pass viewMode to children as prop */}
//         {React.cloneElement(children, { viewMode })}
//       </main>
//     </div>
//   );
// }
