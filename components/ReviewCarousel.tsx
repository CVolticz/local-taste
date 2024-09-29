'use client'
/**
 * Component to render a customer review block
 */
// System Level Import
import { useState } from 'react';


// dummy data
const reviewsData = [
  {
    id: 1,
    user: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    user: 'Jane Smith',
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    user: 'Alice Johnson',
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];


const ReviewCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <div className="carousel">
      <button onClick={handlePrev}>Prev</button>
      <div className="review">
        <h2>{reviewsData[activeIndex].user}</h2>
        <p>{reviewsData[activeIndex].review}</p>
      </div>
      <button onClick={handleNext}>Next</button>

      <style jsx>{`
        .carousel {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .review {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          max-width: 400px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default ReviewCarousel;
