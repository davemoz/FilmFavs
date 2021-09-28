import { useTMDB } from './hooks/useTMDB';
import { MovieList } from './MovieList/MovieList';

import './App.scss';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const App = () => {
  const [data, error] = useTMDB('DISCOVER');
  return (
    <div className='app'>
      <h1 className='title'>FilmFavs</h1>
      {!!error && 'There was an error fetching the movies list.'}
      {!!data && <MovieList movies={data.results} />}
    </div>
  );
};

export default App;
