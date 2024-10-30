const API_NINJAS_KEY = process.env.API_NINJAS_KEY;

async function fetchCatsFromNinja() {
    const url = "https://api.api-ninjas.com/v1/cats?name=cats";
    const result = await fetch(url, {
        headers: { 'X-Api-Key': API_NINJAS_KEY }
    });
    const data = await result.json();
    return data;
}



// handler takes Request and Response
// export default async function handler(req, res) {
//     const cats = await fetchCatsFromNinja();
//     console.log(cats);

//     const responseData = {};
//     if (cats.length > 0) {
//         responseData.name = cats[0].name;
//         responseData.origin = cats[0].origin;
//         responseData.length = cats[0].length;
//     } else {
//         responseData.error = "No Cats";
//     }
//     res.status(200).json(responseData);
// }


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
