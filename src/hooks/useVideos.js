import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

// custom hooks say: if you give me (inputs), then I'll give you (outputs).

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
      },
    });
    // check out the console and follow the dot notation:
    console.log(response.data.items);
    setVideos(response.data.items);
  };

  return { videos, search };
};

export default useVideos;
