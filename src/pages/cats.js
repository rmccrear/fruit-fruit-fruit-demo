import { useEffect, useState } from "react";

export default function Cats() {
  // const url = "https://cats-cats-cats-demo.deno.dev/cats/bur?multi_cat=true";
  const url = "/api/cats"

  const [cats, setCats] = useState([]);

  async function handleFetch() {
    let res = await fetch(url);
    let data = await res.json();
    setCats(data);
  }

  useEffect( () => {
    handleFetch();
  }, []);


  // mapping cat data into an array of LI tags
  const catsElms = cats.map((cat, index) => (
    <li key={index}>{cat.name} from {cat.origin}</li>
  ));

  return (
    <div>
      <h1>Cats</h1>
      <ul>
        {/* Put the LI tags here */}
        {catsElms}
      </ul>
    </div>
  );

}
