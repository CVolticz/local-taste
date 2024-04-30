import Link from "next/link";
import {Button} from "@nextui-org/react";

const Navbar = () => {

  const leftmenu = [
    {
      label: "Travel",
      href: "/travel"
    },
    {
      label: "Recommendation",
      href: "/recommendation"
    },
    {
      label: "Story/Podcast",
      href: "/story"
    }
  ];

  const rightmenu = [
    {
      label: "Experience",
      href: "/experience"
    },
    {
      label: "About Us",
      href: "/about",
    }
  ];
  return (
      <div className="container-fluid w-full h-10 sticky top-0">
        <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap mt-5 mx-10 py-2 px-2">
            {/* <Logo /> */}
              <ul className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
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