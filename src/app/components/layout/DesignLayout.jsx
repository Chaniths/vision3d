// components/layouts/DesignLayout.jsx
import DesignNavbar from "../DesignNavbar";


export default function DesignLayout({ children }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <DesignNavbar />
      <main className="flex-grow overflow-hidden pt-[64px]"> {/* adjust 64px to your navbar height */}
        {children}
      </main>
    </div>
  );
}
