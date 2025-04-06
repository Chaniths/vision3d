export default function FutureVision() {
  return (
    <div className="bg-white py-16 px-6 md:px-20 space-y-24">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center md:space-x-10">
        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Create a floor plan from scratch or upload an existing one
          </h2>
          <p className="text-gray-600">
            Create your perfect layout from the ground up or speed up the
            process with our powerful tools that generate floor plans in
            minutes! Design a fully customizable space whether it’s a single
            room, a complete home, or a commercial property.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/home/tempImageWLS4h5 1.svg"
            alt="Floor Plan"
            className="rounded shadow-md w-full"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center md:space-x-10 md:space-x-reverse">
        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Furnish and decorate with our 3D house design tool
          </h2>
          <p className="text-gray-600">
            Enhance your space with various items from our collection. Discover
            a vast selection of furniture and decor to style your home just the
            way you envision. From modern trends to classic touches, find
            everything you need to create your perfect living space.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/home/image 23.svg"
            alt="3D Design Tool"
            className="rounded shadow-md w-full"
          />
        </div>
      </div>
    </div>
  );
}
