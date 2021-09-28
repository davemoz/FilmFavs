import { useState, useEffect } from 'react';
import Star from './Star';

import './StarRating.scss';

type StarRatingProps = {
  rating: string;
};

const StarRating = ({ rating }: StarRatingProps) => {
  const [starRating, setStarRating] = useState(0);
  const [wholeStars, setWholeStars] = useState(0);
  const [starPercent, setStarPercent] = useState(0);

  useEffect(() => {
    setStarRating(parseFloat(rating));
  }, [rating]);

  useEffect(() => {
    setStarPercent(parseFloat((starRating % 1).toFixed(1)) * 100);
    setWholeStars(Math.floor(starRating));
  }, [starRating]);

  return (
    <div className='movie-rating'>
      {[...Array(wholeStars + (starPercent > 0 ? 1 : 0))].map(
        (star: number, idx: number) => {
          return idx < wholeStars ? (
            <Star key={idx} percentage={100} />
          ) : (
            <Star key={idx} percentage={starPercent} />
          );
        }
      )}
    </div>
  );
};

export default StarRating;
