import React from 'react';

// Next Level Import
import Image from 'next/image';

// MUI Import
import { Slide } from '@mui/material';

// Component imports
import { promos } from '@/app/data/promos';
import { tourpackages } from '@/app/data/tourpackages';
import { photos } from '@/app/data/photos';
import PromoBlock from '@/app/components/PromoBlock';
import TourPackageBlock from '@/app/components/TourPackageBlock';
import PhotoBlock from '@/app/components/PhotoBlock';


// Fonts Import
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['vietnamese']
})




/**
 * Function to build promo blocks
 * @returns PhotoBlocks
 */
const buildPromoBlocks = () => {
  let items = [];
  for (let index = 1; index < 5; index++) {
    items.push(
      <div key={index} className="flex flex-row justify-start gap-2">
        {promos
          .filter((promo) => promo.row === index)
          .map((filteredPromo) => (
            <React.Fragment key={filteredPromo.id}>
              <Slide direction="right" in={true} timeout={800}>
                <PromoBlock
                  key={filteredPromo.id}
                  image={filteredPromo.image}
                  title={filteredPromo.title}
                  description={filteredPromo.description}
                />
              </Slide>
            </React.Fragment>
          ))}
      </div>
    );
  }
  return items;
};

/**
 * Function to build tour package blocks
 * @returns PhotoBlocks
 */
const buildPackageBlocks = () => {
  let items = [];
  for (let index = 1; index < 5; index++) {
    items.push(
      <div key={index} className="flex flex-row justify-start gap-2">
        {tourpackages
          .filter((tourpackage) => tourpackage.row === index)
          .map((filteredTourpackage) => (
            <React.Fragment key={filteredTourpackage.id}>
              <Slide direction="right" in={true} timeout={800}>
                <TourPackageBlock
                  key={filteredTourpackage.id}
                  image={filteredTourpackage.image}
                  title={filteredTourpackage.title}
                  description={filteredTourpackage.description}
                  link={filteredTourpackage.link}
                />
              </Slide>
            </React.Fragment>
          ))}
      </div>
    );
  }
  return items;
};


/**
 * Function to build photo blocks
 * @returns PhotoBlocks
 */
const buildPhotoBlocks = () => {
  let items = [];
  for (let index = 1; index < 5; index++) {
    items.push(
      <div key={index} className="flex flex-row justify-start gap-2">
        {photos
          .filter((photo) => photo.row === index)
          .map((filteredPhoto) => (
            <React.Fragment key={filteredPhoto.id}>
              <Slide direction="right" in={true} timeout={800}>
                <PhotoBlock
                  key={filteredPhoto.id}
                  image={filteredPhoto.src}
                  link={filteredPhoto.link}
                  width={filteredPhoto.width}
                  height={filteredPhoto.height}
                  heading={filteredPhoto.heading}
                />
              </Slide>
            </React.Fragment>
          ))}
      </div>
    );
  }
  return items;
};



export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="my-5 md:my-10 mx-2 sm:mx-4 lg:mx-10 px-2 sm:px-4 lg:px-10 grid grid-cols-1 font-sm gap-2 sm:gap-4 md:grid-cols-2 md:gap-x-4">
          <Slide direction="up" in={true} timeout={800}>
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
                  Explore the hidden gems of Saigon, discover off-the-beaten-path street food,
                  and immerse yourself in the local way of life. Together with my enthusiastic 
                  and expertly trained local guides, we'll take you through the back alleys 
                  and hidden streets that reveal the true essence of Saigon.
                </span>
              </p>
            </div>
          </Slide>
          <Slide direction="up" in={true} timeout={800}>
            <div>        
              <Image
                src="/images/Side_Image.jpg"
                alt="Logo"
                width="800"
                height="1200"
                className="relative"
              />
            </div>
          </Slide>
        </div>
      </section>
      <section className="flex flex-col items-center gradient-bg">
        <h1 className="mx-2 my-2 px-2 py-2 text-6xl font-bold mb-4">We Offer Authentic Experience In Vietnam</h1>
        <div className="my-10 md:my-10 mx-4 sm:mx-4 lg:mx-10 px-4 sm:px-6 lg:px-10 grid grid-cols-1 font-sm gap-2 sm:gap-4 md:grid-span-4 md:gap-x-4">
          {buildPromoBlocks()}
        </div>
      </section>
      <section className="flex flex-col items-center diag-gradient-bg">
        <h1 className="mx-2 my-2 px-2 py-2 text-6xl font-bold mb-4">Let Us Show You The Hidden Gem</h1>
        <div className="my-10 md:my-10 mx-4 sm:mx-4 lg:mx-6 px-4 sm:px-4 lg:px-6 grid grid-cols-1 font-sm gap-2 sm:gap-4 md:grid-span-3 md:gap-x-4">
          {buildPackageBlocks()}
        </div>
      </section>
      <section className="flex flex-col items-center diag-gradient-bg">
        <div className="my-4 md:my-2 py-2 mx-4 sm:mx-4 lg:mx-6 px-2 sm:px-4 lg:px-6 grid grid-span-2 font-sm gap-2 lg:grid-span-2 md:grid-span-1">
          <h1 className="mx-2 my-2 px-2 py-2 text-6xl font-bold mb-4">Book Your Next Trip In 3 Easy Steps</h1>
          <div className="flex flex-row justify-start gap-2">
            <ul>
              <li>
                <Image src="/images/booking/b1.png" alt="booking-step-1" width="50" height="50" />
                <div className="text-container">
                  <h2 className='font-bold'>Choose the Experience</h2>
                  <p>Choose from our selection of tours and experiences</p>
                </div>
              </li>
              <li>
                <Image src="/images/booking/b2.png" alt="booking-step-2" width="50" height="50" />
                <div className="text-container">
                  <h2 className='font-bold'>Pick a date</h2>
                  <p>Select the date that you would like to join us for the tour</p>
                </div>
              </li>
              <li>
                <Image src="/images/booking/b3.png" alt="booking-step-3" width="50" height="50" />
                <div className="text-container">
                  <h2 className='font-bold'>Make a Payment/Text us on Whatsapp to pay for your tour</h2>
                  <p>Make a payment to secure your spot on the tour</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center section-background">
        <h1 className="mx-2 my-2 px-2 py-2 text-6xl font-bold mb-4">Book Your Next Trip In 3 Easy Steps</h1>
        <div className="my-4 md:my-2 py-2 mx-4 sm:mx-4 lg:mx-6 px-2 sm:px-4 lg:px-6 grid grid-span-2 font-sm gap-2 lg:grid-span-2 md:grid-span-1">
          <div className="ellipse"></div>
          {buildPhotoBlocks()}
        </div>
      </section>
    </>

  );
}