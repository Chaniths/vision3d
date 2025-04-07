"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Main navbar */}
      <nav className="bg-[#0A1930] text-white px-5 py-4 flex justify-between items-center">
        <Link href="/home" className="text-2xl font-bold">
          <Image
            src="/Vision3D_Logo.svg"
            alt="Vision3D Logo"
            width={85}
            height={50}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-25 ml-[-250]">
          <Link
            href="/home"
            className="text-white font-medium hover:text-blue-200"
          >
            Home
          </Link>
          <Link
            href="/inspiration"
            className="text-white font-medium hover:text-blue-200"
          >
            Inspiration
          </Link>
          <Link
            href="/resouces"
            className="text-white font-medium hover:text-blue-200"
          >
            Resources
          </Link>
          <Link
            href="/design"
            className="text-white font-medium hover:text-blue-200"
          >
            Design
          </Link>
          <Link
            href="/contact"
            className="text-white font-medium hover:text-blue-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          {/* Message icon */}
          <button className="text-white p-2 rounded-full hover:bg-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </button>

          {/* Search icon */}
          <button className="text-white p-2 rounded-full hover:bg-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-full hover:bg-blue-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900"
            >
              Home
            </Link>
            <Link
              href="/inspiration"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900"
            >
              Inspiration
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900"
            >
              Resources
            </Link>
            <Link
              href="/design"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900"
            >
              Design
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
