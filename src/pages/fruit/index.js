import FruitHeader from "./FruitHeader";

const FRUIT_DATA = {
  "name": "Durian",
  "image_location": "/durian.webp",
  "sweetness": 4,
  "origin": "Vietnam",
  "smelliness": 900
};

console.log(FRUIT_DATA);

export default function Fruit() {
  // TODO: FETCH DATA HERE
  const fruit = FRUIT_DATA;
  return (
    <div>
      {/* FRUIT HEADER */}
      <FruitHeader />
      {/* FRUIT CARD */}
      <div>
        <h1 className="text-3xl text-center">Durian</h1>
        <div>
          <img src="/durian.webp" />
        </div>
      </div>
      {/* FRUIT DESCRIPTION */}
      <div className="flex justify-center">
        <div className="w-2/3 rounded-3xl border-2 border-rose-600 p-4 m-4">
          <p>Origin: {fruit.origin}</p>
          <p>Smelliness: {fruit.smelliness}</p>
        </div>
      </div>
    </div>
  );
}