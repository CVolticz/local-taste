/**
 * Tour Package Block Component
 * Use to Instantiate Card displaying the tour package offering and details
 */
// Next Level Import
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// MUI Import
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


// Tour Package Interface
interface PackageBlockProps {
  image: string;
  title: string;
  description: string;
  link: string;
}


function TourPackageBlock({ image, title, description, link }: PackageBlockProps) {
  return (
    <div className="shadow-2xl bg-white text-black mx-10 my-5 rounded-3xl">
      <Card 
        className="h-full rounded-3xl"
        sx={{maxHeight: 600, maxWidth: 270, borderRadius: 3}} >
        <CardActionArea>
          <Link href={link}>
            <Image 
              className="rounded-t-xl h-80"
              src={image} 
              alt={title}
              width={300} 
              height={100}/>
          </Link>
          <CardContent>
            <Typography className='font-bold text-wrap' gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography className='text-lg' variant="body1" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default TourPackageBlock;