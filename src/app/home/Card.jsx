import Image from "next/image";
import Link from "next/link";

const Card = ({ title, imageSrc, altText, href }) => {
  return (
    <Link href={href}>
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition border border-gray-300 w-80 h-92 cursor-pointer">
        <h3 className="text-lg font-semibold text-center text-black">
          {title}
        </h3>
        <br />
        <br />
        <Image
          src={imageSrc}
          alt={altText}
          width={200}
          height={150}
          className="mb-4"
        />
      </div>
    </Link>
  );
};

export default Card;
