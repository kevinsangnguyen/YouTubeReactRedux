import React, { Component } from 'react';


// const SearchBar = () => {  //functional component
//   return <input /> // React.createElement
// };

class SearchBar extends Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />; //render some jsx
  }

  //EVENT HANDLER
  onInputChange(event){
    console.log(event.target.value);
  }
}

export default SearchBar;
