fetch('http://localhost:3001/api/marvel/comics')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Marvel API Data:', data);
  })
  .catch(error => {
    console.error('Fetch Error:', error);
  });