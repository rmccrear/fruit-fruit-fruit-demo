import FruitHeader from "./FruitHeader";
import FruitCard from "./FruitCard";
import FruitDescription from "./FruitDescription";
import FruitLike from "./FruitLike";
import TEST_DATA from "../../mock-data/durian.json";


console.log(TEST_DATA);

// const FRUIT_DATA = {
//   "name": "Banana",
//   "image_location": "/banana.avif",
//   "sweetness": 4,
//   "origin": "El Salvidor",
//   "smelliness": 9
// };

// console.log(FRUIT_DATA);

export default function Fruit() {
  // TODO: FETCH DATA HERE
  const fruit = TEST_DATA;
  return (
    <div>
      <FruitHeader />
      <FruitCard 
        name={fruit.name}
        imgSrc={fruit.image_location} />
      <FruitDescription
          origin={fruit.origin}
          smelliness={fruit.smelliness} />
      <FruitLike name={fruit.name}/>
    </div>
  );
}