// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// 1. Accept the request at /api/pokemon
// 2. go to https://pokeapi.co/api/v2/pokemon/charmander and get the data
// 3. (optional: simplify the data)
// 4. return the data

export default function handler(req, res) {
  let q = req.query;
  let friend = q.friend;
  console.log(q);
  res.status(200).json({ 
    name: "Jane Smith",
    address: "123 N Main St.",
    hasCat: true,
    likesDurian: false,
    friend: friend
  });
}
