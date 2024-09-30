import React from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent'; // Import the search component

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Beast Search</h1>
          {/* Render the search component */}
          <SearchComponent />
        </header>
      </div>
  );
}

export default App;
