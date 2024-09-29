/**
 * Tour Package Block Component
 * Use to Instantiate Card displaying the tour package offering and details
 */
// Next Level Import
import React from 'react';
import Image from 'next/image';

// MUI Import
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


// Tour Package Interface
interface PromoBlockProps {
  image: string;
  title: string;
  description: string;
}


function PromoBlock({ image, title, description }: PromoBlockProps) {
  return (
    <div className="shadow-2xl bg-white text-black text-left rounded-2xl mx-10 my-5">
      <Card 
        className='px-6 py-6 h-full'
        sx={{maxHeight: 600, maxWidth: 275, overflow: 'auto', borderRadius: 2}} >
        <CardActionArea>
          <CardContent>
            <div className="flex justify-center items-center">
              <Image 
                src={image} 
                alt={title}
                width="100" 
                height="100" />
            </div>
            <Typography className='text-center font-bold' gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography className='text-center text-lg' variant="body1" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default PromoBlock;