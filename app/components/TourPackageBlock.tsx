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
    <div className="shadow-2xl bg-white text-black text-left mx-10 my-5 rounded-3xl">
      <Card 
        className='px-3 py-3 h-full'
        sx={{maxHeight: 600, maxWidth: 300, overflow: 'auto', borderRadius: 3}} >
        <CardActionArea>
          <Link href={link}>
            <CardMedia
              className='rounded-t-3xl'
              component="img"
              alt={title}
              height="40"
              image={image}
            />
            </Link>
            <CardContent>
              <Typography className='font-bold' gutterBottom variant="h5" component="div">
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