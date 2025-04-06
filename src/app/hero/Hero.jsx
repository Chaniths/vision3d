import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero/background.png')" }}
    >
      <div className="bg-opacity-40 rounded-lg text-center max-w-2xl mt-[-200]">
        {/* <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Design Your Dream Home
        </h1> */}
        <Image
          src="/hero/Design Your Dream Home.svg" // Replace with your actual image path
          alt="Design Your Dream Home"
          width={700}
          height={450}
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-lg mb-6 text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] mt-9">
          Design floor plans and create 3D home models effortlessly with our all
          in one home design platform. Visualize your ideas with precision and
          high quality 4K renders quick, simple, and professional.
        </p>
        <Link href={"/design"}>
          <button className="bg-[#0a1929] hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-full text-base shadow-md transition duration-300 ease-in-out cursor-pointer">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
