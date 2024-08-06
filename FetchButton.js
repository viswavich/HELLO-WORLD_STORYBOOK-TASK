import React, { useState } from 'react';

const FetchButton = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.title} by {item.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchButton;
