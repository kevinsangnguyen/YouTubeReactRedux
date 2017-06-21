import React, { Component } from 'react';


// const SearchBar = () => {  //functional component
//   return <input /> // React.createElement
// };

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
    //STATE IS A PLAIN JAVASCRIPT OBJECT THAT IS USED TO RECORD/REACT USER EVENTS
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // //EVENT HANDLER
  // onInputChange(event){
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
