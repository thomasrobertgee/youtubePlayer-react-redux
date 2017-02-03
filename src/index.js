import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA8q9ALZzhfoLfERQ2p_95-w14s3bKq2Tk';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Take this component's generted HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
