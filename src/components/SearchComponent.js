import React, { useState } from 'react';
import { fetchSearchResults } from '../services/api';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    const handleSearch = async () => {
        // Clear previous error and results
        setError(null);
        setResults([]);
        // Start loading
        setLoading(true);

        try {
            const data = await fetchSearchResults(query);
            if (data && data.length > 0) {
                setResults(data); // Populate results
            } else {
                setResults([]); // Clear results if nothing is found
            }
        } catch (err) {
            console.error('Error during search:', err);
            setError('An error occurred during the search. Please try again.'); // Display error message
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Beast Search..."
                aria-label="Search Beast Search"
            />
            <button className="search-button" onClick={handleSearch}>
                Search
            </button>

            <div className="results-container" aria-live="polite">
                {/* Display error message if there's an error */}
                {error && <p className="error-message">{error}</p>}

                {/* Loading spinner */}
                {loading ? (
                    <div className="loading-overlay">
                        <div className="loading-spinner"></div>
                    </div>
                ) : (
                    <>
                        {results.length > 0 ? (
                            <ul className="results-list">
                                {results.map((result, index) => (
                                    <li key={index} className="result-item">
                                        <h3>{result._source.title}</h3>
                                        <p>{result._source.content}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No results found</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchComponent;
