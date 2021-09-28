import useSWR from 'swr';
import { useFetch } from './useFetch';

import { TMDB_ENDPOINT } from '../constants/tmdb';

const headersArgs = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
  },
};

export const useTMDB = (method?: string) => {
  let refine = '';
  switch (method) {
    case 'DISCOVER':
      refine = 'discover/movie?sort_by=popularity.desc';
      break;
    case 'CONFIGURATION':
      refine = 'configuration';
      break;
    default:
      refine = 'movie/top_rated';
      break;
  }

  const { data, error } = useSWR(
    [TMDB_ENDPOINT + refine, headersArgs],
    useFetch
  );

  return [data, error];
};

export const useTMDBconfig = () => {
  const { data, error } = useSWR(
    [TMDB_ENDPOINT + 'configuration', headersArgs],
    useFetch
  );

  return [data, error];
};
