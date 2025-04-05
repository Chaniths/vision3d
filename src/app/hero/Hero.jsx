// components/HeroSection.tsx
export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero/background.png')" }}
    >
      <div className="bg-opacity-40 p-6 rounded-lg text-center max-w-2xl mt-[-140]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          Design Your Dream Home
        </h1>
        <p className="text-lg mb-6 text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] mt-9">
          Design floor plans and create 3D home models effortlessly with our all
          in one home design platform. Visualize your ideas with precision and
          high quality 4K renders quick, simple, and professional.
        </p>
        <button className="bg-[#0a1929] hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full transition duration-300 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}
