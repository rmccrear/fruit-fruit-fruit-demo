import { useEffect, useState } from "react";

export default function Cats() {
  const url = "https://cats-cats-cats-demo.deno.dev/cats/bur?multi_cat=true";

  const [cats, setCats] = useState([]);

  async function handleFetch() {
    let res = await fetch(url);
    let data = await res.json();
    setCats(data);
  }

  useEffect( () => {
    handleFetch();
  }, []);

  return (
    <div>
      <h1>Cats</h1>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );

}
