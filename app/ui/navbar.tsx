import Link from "next/link";
import { useState } from 'react';

import {Button} from "@nextui-org/react";

const Navbar = () => {


  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-24">
      <div className="flex flex-wrap justify-between items-center md:justify-start md:gap-4 lg:gap-10 mt-2 md:mt-5 py-2 px-2">
        <ul id="menu" className="hidden md:flex flex-wrap gap-4 lg:gap-10 items-center justify-center md:justify-start">
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
        <div className="flex justify-between items-center w-full md:w-auto">
            <Link href="/">
              <p className="px-5 py-2 text-lg font-large text-gray-600 dark:text-gray-400 hover:text-blue-500">
                Local Taste
              </p>
            </Link>
        </div>
        <ul className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
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
      </div>
    </div>
  );
};

export default Navbar;