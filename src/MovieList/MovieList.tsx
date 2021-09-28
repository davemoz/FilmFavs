import { Movie, MovieType } from '../Movie/Movie';

import './MovieList.scss';

type MovieListProps = {
  movies: MovieType[];
};

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className='movie-list'>
      {!!movies
        ? movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })
        : 'No movies found.'}
    </ul>
  );
};
