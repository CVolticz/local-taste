/**
 * Component to render an image in a block
 */
// System Level Import
import Link from "next/link";
import Image from "next/image";


/**
 * Photoblock interface
 */

interface PhotoBlockProps {
  image: string;
  link: string;
  width: number;
  height: number;
  heading: string;
}


/**
 * PhotoBlock component
 */
const PhotoBlock = ({image, link, width, height, heading }: PhotoBlockProps) => {
  return (
    <>
      <div>
        <Link href={link}>
          <div className={`group relative cursor-pointer rounded-lg`}>
            <Image
              className="transition ease-in-out delay-150 duration-700 group-hover:opacity-50 group-hover:-translate-y-1 group-hover:scale-110"
              src={image}
              width={width}
              height={height}
              alt="Photo"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-primary font-bold">
              <h1>{heading}</h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PhotoBlock;