import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

// deployed:
// vercel: https://youtube-mock-three.vercel.app

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videos, search } = useVideos('Where to eat in East Hampton ');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onSearchTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="nine wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="seven wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

// original class component:

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   onSearchTermSubmit = async (searchTerm) => {
//     const response = await youtube.get('/search', {
//       params: {
//         q: searchTerm,
//       },
//     });
//     // check out the console and follow the dot notation:
//     console.log(response.data.items);
//     this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   };

//   componentDidMount() {
//     this.onSearchTermSubmit('East Hampton, Long Island');
//   }

//   render() {
//     const { videos } = this.state;

//     return (
//       <div className="ui container">
//         <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="nine wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="seven wide column">
//               <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
