/**
 * Footer component that displays the footer of every the page
 */
// NEXT Level Import
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Component level import
import Social from './Social';

// MUI Import
import { Typography, Slide } from '@mui/material';

// Data level import 
import { socials } from '@/app/data/social';


/**
 * Function to build Social media buttons
 * @returns PhotoBlocks
 */
const buildSocialButton = () => {
  let items = [];
  for (let index = 1; index < 5; index++) {
    items.push(
      <div key={index} className="flex flex-row justify-start gap-2">
        {socials
          .filter((social) => social.row === index)
          .map((filteredSocial) => (
            <React.Fragment key={filteredSocial.id}>
              <Slide direction="right" in={true} timeout={800}>
                <Social
                  key={filteredSocial.id}
                  image={filteredSocial.src}
                  link={filteredSocial.link}
                  width={filteredSocial.width}
                  height={filteredSocial.height}
                  heading={filteredSocial.heading}
                />
              </Slide>
            </React.Fragment>
          ))}
      </div>
    );
  }
  return items;
};



//Footer components
function Footer() {
    return (
      <section className="flex flex-col items-center">
        <div className="flex flex-row">
          <Image 
            className="flex-shrink-0"
            src="/images/footer-logo.png" 
            alt="Local Taste Vietnam" 
            width={300} 
            height={200} />
          <div className="flex flex-col">
            <Typography variant="h6" color="textPrimary">
              Local Taste Vietnam
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Local Taste Vietnam is a local food and travel blog that provides information about local food and travel in Vietnam.
            </Typography>
          </div>
          <div className="my-10 md:my-8 py-4 mx-4 sm:mx-4 lg:mx-6 px-2 sm:px-4 lg:px-6 grid grid-span-2 font-sm gap-2 lg:grid-span-2 md:grid-span-1">
            {buildSocialButton()}
          </div>
        </div>
        <Typography variant="body2" color="textSecondary" align="center">
          { 'Copyright © '}
          <Link color='inherit' href="./">
              Local Taste Vietnam
          </Link>{' '}
          {new Date().getFullYear()}
          {' All Rights Reserves.'} 
        </Typography>
      </section>
       
    );
}
export default Footer;
