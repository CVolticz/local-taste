/**
 * Social media button component
 */
// NEXT Level Import
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Interface for Social component
interface SocialProps {
  link: string;
  image: string;
  width: number;
  height: number;
  heading: string; 
}


// Create a Social component that feed in Link and Circular Social Media Icon
const Social = ({ link, image, width, height, heading}: SocialProps ) => {
  return (
    <Link href={link}>
      <div className="cursor-pointer">
        <Image
          src={image}
          width={width}
          height={height}
          alt={heading}
        />
      </div>
    </Link>
  );
};

export default Social;