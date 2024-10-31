import { use, useEffect, useState } from "react";

export default function CatPage() {
  //const url = "https://cats-cats-cats-demo.deno.dev/cats/bur";
  const url = "/api/cat";

  const [cat, setCat] = useState({});
  // define searchTerm
  const [searchTerm, setSearchTerm] = useState('california');

  async function handleFetch() {
    let res = await fetch(url + `?name=${searchTerm}`);
    let data = await res.json();
    setCat(data);
  }

  useEffect( () => {
    handleFetch();
  }, []);

  function handleSearchTermChange(env) {
    console.log(env)
    const s = env.target.value;
    console.log(s);
    setSearchTerm(s);
  }

  // function handleClick() {
  //   handleFetch();
  // }

  function handleSubmit(event) {
    event.preventDefault();
    handleFetch();
  }

  return (
    <div className="m-10">
      <h1>Cat: {cat.name}</h1>
      <div>
        <img  src={cat.img} alt="cat pic" className="size-40 border-2 border-black"/>
      </div>
      <div>
        <p>
            {cat.origin}
        </p>
      </div>
      <div>
        <h4> Cat form </h4>
        <p>Let's search for {searchTerm}</p>
        <form onSubmit={handleSubmit}>
          <label>
            Kind of Cat to search for:
            {/* Controlled Component */}
            <input className="border-2 border-red-500" type="text"
                   value={searchTerm}
                   onChange={handleSearchTermChange}/>
          </label>
          <button className="rounded-md border-2 bg-blue-500" 
                  type="submit"
                  >
                  Search for your dream cat
            </button>
        </form>
      </div>
    </div>
  );

}
