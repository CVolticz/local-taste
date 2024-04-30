'use client'
import Link from "next/link";
import { useState } from 'react';

import {Button} from "@nextui-org/react";

const Navbar = () => {

  // Add interative hamburger menu on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-24">
      <div className="flex flex-wrap items-center md:justify-center mt-2 md:mt-5 py-2 px-10">
        <div className="flex-1 flex justify-between items-center">
        <ul id="menu" className="hidden md:flex flex-wrap lg:gap-6 justify-center">
          <li>
            <Link href="/travel">
              <p className="px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                Travel
              </p>
            </Link>
          </li>
          <li>
            <Link href="/recommendation">
              <p className="px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                Recommendation
              </p>
            </Link>
          </li>
          <li>
            <Link href="/story">
              <p className="px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                Story/Podcast
              </p>
            </Link>
          </li>
        </ul>
        <ul id="menu" className="md:flex flex-wrap gap-10 justify-center">
          <li>
            <Link href="/">
              <p className="px-12 py-2 text-lg font-large text-gray-600 dark:text-gray-400 hover:text-blue-500">
                Local Taste
              </p>
            </Link>
          </li>
        </ul>
        <ul id="menu" className="hidden md:flex flex-wrap lg:gap-6 justify-center">
          <li>
              <Link href="/experience">
                <p className="px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                  Experience
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                  About Us
                </p>
              </Link>
            </li>
            <li>
              <Button color="default" variant="bordered">
                Experience Now
              </Button>  
            </li>
        </ul>
          <div className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;