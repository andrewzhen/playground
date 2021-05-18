import React from 'react';
import { useState, useEffect } from 'react';

const Lark = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  function loadMore() {
    setPage(page + 1);
    getResults(page + 1);
  }

  function getResults(pageNum) {
    fetch('https://picsum.photos/v2/list?page=' + pageNum + '&limit=10')
    .then(res => res.json()) 
    .then(
      result => {
        console.log([...results, ...result]);
        setResults([...results, ...result]);
      }
    );
  }

  useEffect(() => {
    getResults(page);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <ul>
        {
          results.map(result => {
            return (
              <li key={result.id}>
                <img src={result["download_url"]} alt="" />
                <p>{result.author}</p>
              </li>
            )
          })
        }
      </ul>

      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default Lark;