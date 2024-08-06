const fetch = require('node-fetch');

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3001/posts');
    const data = await response.json();
    console.log('Fetched Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
