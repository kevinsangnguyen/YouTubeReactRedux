import React from 'react'; //render react components
import ReactDOM from 'react-dom'; //render components to dom

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDlVBzGQx0BtzwU7n5-sdsJRYBUM7jdGoA';

// Create a new component. This componeent should produce some HTML
const App = () => {  // CLASS BUT NOT INSTANCE
  return (
  <div>
    <SearchBar />
  </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
