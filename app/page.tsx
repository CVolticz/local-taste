import React from 'react';

// Next Level Import
import Image from 'next/image';

// MUI Import
import {Paper, Card, CardContent, Slide, Typography} from '@mui/material';

// Component imports
import { photos } from '@/app/data/photos';
import PhotoBlock from '@/app/components/PhotoBlock';


// Fonts Import
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['vietnamese']
})


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
        <div className="my-10 md:my-10 mx-4 sm:mx-4 lg:mx-10 px-4 sm:px-6 lg:px-10 grid grid-cols-1 font-sm gap-2 sm:gap-4 md:grid-cols-4 md:gap-x-4">
          <Slide direction="right" in={true} timeout={800}>
            <div className="shadow-lg bg-white text-black text-left rounded-lg mx-10 my-5">
              <Card style={{maxHeight: 500, maxWidth: 275, overflow: 'auto'}} className='px-6 py-6 h-full'>
                <CardContent>
                  <div className="flex justify-center items-center">
                    <Image 
                      src="/images/promocards/promo_1.png" 
                      alt="Quality Tour Guide" 
                      width="100" 
                      height="100" />
                  </div>
                  <Typography className='text-center bold' gutterBottom variant="h5" component="div">
                    Quality Tour Guide
                  </Typography>
                  <Typography className='text-center text-lg' variant="body1" color="text.secondary">
                    Experienced local tour guides who are passionate about sharing their culture and history.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Slide>
          <Slide direction="right" in={true} timeout={800}>
          <div className="shadow-lg bg-white text-black text-left rounded-lg mx-10 my-5">
              <Card style={{maxHeight: 500, maxWidth: 275, overflow: 'auto'}} className='px-6 py-6 h-full'>
                <CardContent>
                <div className="flex justify-center items-center">
                  <Image 
                    src="/images/promocards/promo_2.png" 
                    alt="Quality Tour Guide" 
                    width="100" 
                    height="100" />
                </div>
                  <Typography className='text-center font-bold' gutterBottom variant="h5" component="div">
                    Friendly Price
                  </Typography>
                  <Typography className='text-center text-lg' variant="body1" color="text.secondary">
                    Our tours are priced competitively to ensure you get the best value for your money.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Slide>
          <Slide direction="left" in={true} timeout={800}>
            <div className="shadow-lg bg-white text-black text-left rounded-lg mx-10 my-5">
              <Card style={{maxHeight: 500, maxWidth: 275, overflow: 'auto'}} className='px-6 py-6 h-full'>
                <CardContent>
                  <div className="flex justify-center items-center">
                    <Image 
                      src="/images/promocards/promo_3.png" 
                      alt="Quality Tour Guide" 
                      width="100" 
                      height="100" />
                  </div>
                  <Typography className='text-center font-bold' gutterBottom variant="h5" component="div">
                    Reliable
                  </Typography>
                  <Typography className='text-center text-lg' variant="body1" color="text.secondary">
                    We are committed to providing you with a safe and enjoyable experience. 
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Slide>
          <Slide direction="left" in={true} timeout={800}>
            <div className="shadow-lg bg-white text-black text-left rounded-lg mx-10 my-5">
              <Card style={{maxHeight: 600, maxWidth: 275, overflow: 'auto'}} className='px-6 py-6 h-full'>
                <CardContent>
                  <div className="flex justify-center items-center">
                    <Image 
                      src="/images/promocards/promo_4.png" 
                      alt="Quality Tour Guide" 
                      width="100" 
                      height="100" />
                  </div>
                  <Typography className='text-center font-bold' gutterBottom variant="h5" component="div">
                    Customization
                  </Typography>
                  <Typography className='text-center text-lg' variant="body1" color="text.secondary">
                    We offer a range of tours that can be customized to suit your interests and preferences.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Slide>
        </div>
      </section>
      <section className="flex flex-col items-center section-background ellipse">
          <h1 className="mx-2 my-2 px-2 py-2 text-6xl font-bold mb-4">Book Your Next Trip In 3 Easy Steps</h1>
          <div className="my-4 md:my-2 py-2 mx-4 sm:mx-6 lg:mx-10 px-2 sm:px-4 lg:px-10 grid grid-span-2 font-sm gap-2 lg:grid-span-2 md:grid-span-1">
            {buildPhotoBlocks()}
          </div>
      </section>
    </>

  );
}

