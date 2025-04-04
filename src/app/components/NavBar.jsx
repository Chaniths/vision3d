import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="bg-[#0A1930] text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/Vision3D_Logo.svg" alt="Vision3D Logo" width={85} height={50} />
        </Link>
        <div className="flex space-x-4">  
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/inspiration" className="hover:text-gray-400">Inspiration</Link>
          <Link href="/resources" className="hover:text-gray-400">Resources</Link>
          <Link href="/design" className="hover:text-gray-400">Design</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
