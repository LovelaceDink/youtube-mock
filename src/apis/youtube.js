import axios from 'axios';

const KEY = //YOUR GOOGLE YOUTUBE API KEY GOES HERE;

// install AXIOS
// allows us to create our fetch request with something like - youtube.get('/search')
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY,
  },
});
