// components/layouts/DesignLayout.jsx
import DesignNavbar from "../DesignNavbar";


export default function DesignLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <DesignNavbar/>
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
