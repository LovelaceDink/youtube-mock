import React, { useState } from 'react';

const SearchBar = ({ onSearchTermSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSearchTermSubmit(searchTerm);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search For A Video</label>
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

// original class component:
// class SearchBar extends React.Component {
//   state = { searchTerm: '' };

//   onInputChange = (e) => {
//     const term = e.target.value;
//     this.setState({ searchTerm: term });
//   };

//   onFormSubmit = (e) => {
//     e.preventDefault();

//     this.props.onSearchTermSubmit(this.state.searchTerm);
//   };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Video Search</label>
//             <input type="text" value={this.state.searchTerm} onChange={this.onInputChange} />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;
