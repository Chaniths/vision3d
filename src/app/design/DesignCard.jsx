import Link from "next/link";
import React from "react";

export default function DesignCard({ imgSrc, isNew }) {
  return (
    <div className=" bg-[#D9D9D9]  rounded-lg shadow-md overflow-hidden h-64 flex items-center justify-center ">
      {isNew ? (
        <Link href={"/auth"}>
          <div className="text-center text-gray-400  ">
            <div className="text-4xl">+</div>
            <div>New Project</div>
          </div>
        </Link>
      ) : (
        <img
          src={imgSrc}
          alt="project"
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
