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
        <div className="flex flex-row flex-col sm:flex-row gap-5">
          <Image 
            className="flex-shrink-0"
            src="/images/footer-logo.png" 
            alt="Local Taste Vietnam" 
            width={350} 
            height={100} />
          <div className="flex flex-row flex-col sm:flex-row gap-10 my-10 sm:my-8 py-4 mx-4 sm:mx-4 lg:mx-6 px-2 sm:px-4">
            <div className="flex flex-col flex-1">
              <Typography variant="h5" color="textPrimary text-bold">
                Company
              </Typography>
              <ul>
                <li><Link href="/about"><p>About</p></Link></li>
                <li><Link href="/careers"><p>Careers</p></Link></li>
                <li><Link href="/mobile"><p>Mobile</p></Link></li>
              </ul>
            </div>
            <div className="flex flex-col flex-1">
              <Typography variant="h5" color="textPrimary text-bold">
                Contact
              </Typography>
              <ul>
                <li><Link href="/faq"><p>Help/FAQ</p></Link></li>
                <li><Link href="/pr"><p>Press</p></Link></li>
                <li><Link href="/affiliates"><p>Affiliates</p></Link></li>
              </ul>
            </div>
            <div className="flex flex-col flex-1">
              <Typography variant="h5" color="textPrimary text-bold">
                More...
              </Typography>
              <ul>
                <li><Link href="/arlinefees"><p>Airlinefees</p></Link></li>
                <li><Link href="/arline"><p>Airline</p></Link></li>
                <li><Link href="/recommendation"><p>Recommendation</p></Link></li>
              </ul>
            </div>
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
