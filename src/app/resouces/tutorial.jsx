import Image from "next/image";


const Tutorial = ({ title, imageSrc, altText, desc}) => {
  return (

      <div className=" shadow-md rounded-lg p-4 flex flex-col items-center    w-80 h-92 cursor-pointer">
        <Image
          src={imageSrc}
          alt={altText}
          width={300}
          height={250}
          className="mb-4"
        />
        <br />
        <h3 className="text-lg font-semibold text-center ">
          {title}
        </h3>
        <br />
        <p className="text-lg font-extralight ">
            {desc}
        </p>
      </div>
  );
};

export default Tutorial;
