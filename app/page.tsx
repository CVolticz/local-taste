// Next Level Import
import Image from 'next/image';

// MUI Import
import {Paper, Card, CardContent, Slide, Typography} from '@mui/material';


// Fonts Import
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['vietnamese']
})


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
                  Exlore the hidden gems of Saigon, discover off-the-beaten-path street food,
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
        <div className="my-10 md:my-10 mx-2 sm:mx-4 lg:mx-10 px-2 sm:px-4 lg:px-10 grid grid-cols-1 font-sm gap-2 sm:gap-4 md:grid-cols-4 md:gap-x-4">
          <Slide direction="right" in={true} timeout={800}>
          <div className="shadow-lg bg-white text-black text-left rounded-lg mx-10 my-5">
              <Card style={{maxHeight: 600, maxWidth: 275, overflow: 'auto'}} className='px-6 py-6'>
                <CardContent>
                  <Typography className='text-center bold' gutterBottom variant="h4" component="div">
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
              <Card style={{maxHeight: 600, maxWidth: 275, overflow: 'auto'}} className='px-6 py-6'>
                <CardContent>
                  <Typography className='text-center font-bold' gutterBottom variant="h4" component="div">
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
              <Card style={{maxHeight: 600, maxWidth: 275, overflow: 'auto'}} className='px-6 py-6'>
                <CardContent>

                  <Typography className='text-center font-bold' gutterBottom variant="h4" component="div">
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
              <Card style={{maxHeight: 600, maxWidth: 275, overflow: 'auto'}} className='px-6 py-6'>
                <CardContent>
                  <Typography className='text-center font-bold' gutterBottom variant="h4" component="div">
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
    </>

  );
}

