// Next Level Import
import Image from 'next/image';

// Fonts Import
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['vietnamese']
})


export default function Home() {
  return (
  <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24">
    <div className="my-5 md:my-10 mx-2 sm:mx-4 lg:mx-10 px-2 sm:px-4 lg:px-10 grid grid-cols-1 font-sm gap-2 sm:gap-4 md:grid-cols-2 md:gap-x-4">
        <div>
          <Image
            src="/images/Title_Image.jpg"
            alt="Logo"
            width="800"
            height="1200"
            className="relative"
          />
          <p className="mt-5 pt-5 text-2xl">
            <span style={{fontFamily: notoSans.style.fontFamily, fontWeight: 400}}>
              Exlore the hidden gems of Saigon, discover off-the-beaten-path street food,
              and immerse yourself in the local way of life. Together with my enthusiastic 
              and expertly trained local guides, we'll take you through the back alleys 
              and hidden streets that reveal the true essence of Saigon.
            </span>
          </p>
        </div>
        <div>        
          <Image
            src="/images/Side_Image.jpg"
            alt="Logo"
            width="800"
            height="1200"
            className="relative"
          />
        </div>
      </div>
    </main>
  );
}
