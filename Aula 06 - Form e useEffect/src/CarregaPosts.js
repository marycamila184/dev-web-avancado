import React, { useState, useEffect } from 'react';

export default function CarregaTitulo() {
  const [listPosts, setlistPosts] = useState(null);

  const options = {
    method: 'GET'
  };

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/typicode/demo/posts')
      .then(response => response.json())
      .then(data => setlistPosts(data))
      .catch(err => console.error(err))
  }, []);

  if (!listPosts) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <div>Dados: {listPosts.map((post, index) => <div key={index}>{post.title}</div>)}</div>
    </div>
  );
}