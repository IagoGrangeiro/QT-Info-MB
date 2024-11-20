"use client"

import { useEffect, useState } from 'react';
import { Pergunta } from '../lib/definitions';

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("../api/data");
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from SQLite</h1>
      <ul>
        {data.map((item: Pergunta) => (
          <li key={item.id}>{item.pergunta}: {item.resposta}</li>
        ))}
      </ul>
    </div>
  );
}
