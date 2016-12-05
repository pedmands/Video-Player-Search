import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBw3rJxO9rWa6YYj8NA10F7AHmETp8hicc';

const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
