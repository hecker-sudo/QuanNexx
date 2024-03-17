  // Initialize Algolia client
  const algoliaClient = algoliasearch('0YMDYH0EKG', '6ada85e9a3959b52504632bc9fdacad5');
  const algoliaIndex = algoliaClient.initIndex('QuanNex');

  function searchAlgolia() {
    const query = document.getElementById('search-input').value;

    algoliaIndex.search(query).then(({ hits }) => {
      const searchResults = document.getElementById('search-results');
      searchResults.innerHTML = '';

      hits.forEach(hit => {
        const li = document.createElement('li');
        li.textContent = hit.title;
        searchResults.appendChild(li);
      });
    });
  }

  function searchGoogle() {
    const query = document.getElementById('search-input').value;
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = googleSearchURL;
  }