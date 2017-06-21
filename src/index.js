import React, { Component } from 'react'; //render react components
import ReactDOM from 'react-dom'; //render components to dom
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDlVBzGQx0BtzwU7n5-sdsJRYBUM7jdGoA';


// Create a new component. This componeent should produce some HTML
class App extends Component {  // CLASS BUT NOT INSTANCE
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
