import { useTMDBconfig } from '../hooks/useTMDB';
import StarRating from '../StarRating/StarRating';

import './Movie.scss';

export type MovieType = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: string;
  overview: string;
};

export const Movie = ({
  id,
  title,
  release_date,
  poster_path,
  vote_average,
  overview,
}: MovieType) => {
  const [config] = useTMDBconfig();
  return (
    <li key={id} className='movie'>
      <img
        alt={title}
        src={
          config && poster_path
            ? config.images.secure_base_url +
              config.images.poster_sizes[1] +
              poster_path
            : 'No image found.'
        }
      />
      <h3 className='movie-title'>{title}</h3>
      <StarRating rating={vote_average} />
      <div className='movie-release-date'>
        {new Date(release_date).toLocaleDateString(undefined, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </div>
      <p className='movie-overview'>{overview}</p>
    </li>
  );
};
