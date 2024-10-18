import FruitHeader from "./FruitHeader";
import FruitCard from "./FruitCard";
import FruitDescription from "./FruitDescription";

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
      <FruitCard />
      {/* FRUIT DESCRIPTION */}
      <FruitDescription
          origin={fruit.origin}
          smelliness={fruit.smelliness} />
    </div>
  );
}