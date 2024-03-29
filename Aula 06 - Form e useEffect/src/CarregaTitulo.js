import React, { useState, useEffect } from 'react';

export default function CarregaTitulo() {
  const [data, setData] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6cee2532c3msh9f33de7c802f892p186271jsndd0948b5586b',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://moviesminidatabase.p.rapidapi.com/movie/order/byRating/', options)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
  }, []);

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <div>Dados: {data.results.map((result, index) => <div key={index}>{result.title}</div>)}</div>
    </div>
  );
}