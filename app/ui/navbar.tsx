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
                {leftmenu.map((item, index) => (
                  <li>
                    <Link href={item.href} key={index}>
                      <p className="px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                        {item.label}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center w-full md:w-auto">
                <Link href="/">
                  <p className="px-5 py-2 text-lg font-large text-gray-600 dark:text-gray-400 hover:text-blue-500">
                    Local Taste
                  </p>
                </Link>
              </div>
              <ul className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
                {rightmenu.map((item, index) => (
                  <li>
                    <Link href={item.href} key={index}>
                      <p className="px-5 py-2 text-md font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                        {item.label}
                      </p>
                    </Link>
                  </li>
                ))}
                <Button color="default" variant="bordered">
                  Experience Now
                </Button>  
              </ul>

          </div>
        </div>
  );
};

export default Navbar;