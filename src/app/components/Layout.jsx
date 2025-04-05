import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">   
        <div className="px-8 py-6">  
          {children}                 
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
