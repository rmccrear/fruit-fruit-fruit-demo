const API_NINJAS_KEY = process.env.API_NINJAS_KEY;
// const CATS_SERVICE_URL =  process.env.CATS_SERVICE_URL;

const catHut = {};

// const cat = {};
// cat.name = "Frisky";
// cat["name"] = "Frisky";
// cat["russian"] = {...}

// this is cache ... {
//   "russian" : {name: "Russian Cat", ...},
//   "bombay": {...},
//   "coon": {...}

// }

// cached fetch
async function fetchCatsFromNinja(partialName) {
    // const url = `${CATS_SERVICE_URL}?name=${partialName}`;
    const url = `https://api.api-ninjas.com/v1/cats?name=${partialName}`;
    if(catHut[partialName] !== undefined) {
        console.log("using cached version of: ", partialName);
        return catHut[partialName];
    } else {
        console.log("fetching: ", partialName);
        const result = await fetch(url, {
            headers: { 'X-Api-Key': API_NINJAS_KEY }
        });
        const data = await result.json();
        catHut[partialName] = data;
        return data;
    }
}



// handler takes Request and Response
export default async function handler(req, res) {
    const query = req.query;
    // console.log(query);
    const searchTerm = query.name;
    const cats = await fetchCatsFromNinja(searchTerm);
    // console.log(cats);

    const responseData = {};
    if (cats.length > 0) {
        responseData.name = cats[0].name;
        responseData.origin = cats[0].origin;
        responseData.length = cats[0].length;
        responseData.img = cats[0].image_link;
    } else {
        responseData.error = "No Cats";
    }
    res.status(200).json(responseData);
}


// ANOTHER WAY
// class Cat {
//     constructor(data) {
//         this.name = data.name ? data.name : "No Name"; // in case the cat comes with no name
//         this.length = data.length;
//         this.origin = data.origin;
//         // Do some more processing
//         this.commentaryOnTheCat = `The ${this.name} is ${this.length} from ${this.origin}`
//     }

//     toJSON() {
//         return {
//             name: this.name,
//             length: this.length,
//             origin: this.origin,
//             commentaryOnTheCat: this.commentaryOnTheCat
//         }
//     }
// }


// export default async function handler(req, res) {
//     const catsData = await fetchCatsFromNinja();

//     if (catsData.length > 0) {
//         const responseData =
//             catsData.map(catData => new Cat(catData))
//                 .map(cat => cat.toJSON());
//         res.status(200).json(responseData);
//     } else {
//         res.status(404).json({ error: "No Cats" });
//     }
// }

// Third way

// export default  function handler(req, res) {
//     const query = req.query;
//     console.log(query);
//     fetchCatsFromNinja("cali").then((cats) => {
//         console.log(cats);

//         const responseData = {};
//         if (cats.length > 0) {
//             responseData.name = cats[0].name;
//             responseData.origin = cats[0].origin;
//             responseData.length = cats[0].length;
//             responseData.img = cats[0].image_link;
//         } else {
//             responseData.error = "No Cats";
//         }
//         res.status(200).json(responseData);
//     });
// }