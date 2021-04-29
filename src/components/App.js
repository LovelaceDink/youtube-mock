import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
      },
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onSearchTermSubmit('Lilith fair hits');
  }

  render() {
    const { videos } = this.state;

    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="nine wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="seven wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
