export const useFetch = async (url: string, args: Object) => {
  return await fetch(url, args)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation: ',
        error
      );
    });
};
