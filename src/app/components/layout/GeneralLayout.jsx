// components/layouts/GeneralLayout.jsx
import Footer from "../Footer";
import Navbar from "../NavBar";

export default function GeneralLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar/>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
