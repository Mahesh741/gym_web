export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    //'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    'X-RapidAPI-Key': '3a8967e737msh60b8b1c16e98e01p1fdeddjsn99635dcffabc'
    }
};
export const youtubeOptions = {
  method: 'GET',  
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '3a8967e737msh60b8b1c16e98e01p1fdeddjsn99635dcffabc'
    }
};


export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
