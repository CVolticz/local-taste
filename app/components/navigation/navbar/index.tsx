// System Level Import
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
// import Button from "./Button";

// NextUI Imports
import {Button} from "@nextui-org/react";


const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full mt-5 pt-5 mb-5">
            <ul id="leftmenu" className="hidden md:flex flex-wrap lg:gap-10 justify-center">
              <li>
                <Link href="/travel">
                  <p className="px-5 py-2 text-md text-800 hover:text-blue-500">
                    Travel
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/recommendation">
                  <p className="px-5 py-2 text-md text-600 hover:text-blue-500">
                    Recommendation
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/story">
                  <p className="px-5 py-2 text-md text-600 hover:text-blue-500">
                    Story/Podcast
                  </p>
                </Link>
              </li>
            </ul>
            <Logo />
            <ul id="leftmenu" className="hidden md:flex flex-wrap lg:gap-10 justify-center">
              <li>
                  <Link href="/experience">
                    <p className="px-5 py-2 text-md text-600 hover:text-blue-500">
                      Experience
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <p className="px-5 py-2 text-md text-600 hover:text-blue-500">
                      About Us
                    </p>
                  </Link>
                </li>
                <li>
                  <Button 
                    color="default" 
                    variant="bordered" 
                    className="px-5 py-2 text-md text-600 hover:text-blue-500">
                    Experience Now
                  </Button>  
                </li>
            </ul>
            <div className="align-right">
              <button
                type="button"
                className="inline-flex items-center md:hidden"
                onClick={toggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;