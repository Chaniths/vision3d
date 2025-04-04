import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A1930] text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold">VISION 3D</h2>
        <p className="text-sm">Empowering Architects</p>
        
        <div className="flex justify-center space-x-4 my-4">
          <Link href="#"><FaFacebook className="text-2xl hover:text-gray-400" /></Link>
          <Link href="#"><FaInstagram className="text-2xl hover:text-gray-400" /></Link>
          <Link href="#"><FaTiktok className="text-2xl hover:text-gray-400" /></Link>
          <Link href="#"><FaLinkedin className="text-2xl hover:text-gray-400" /></Link>
        </div>
        
        <p className="text-gray-400 text-sm">© 2025 Vision 3D | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
