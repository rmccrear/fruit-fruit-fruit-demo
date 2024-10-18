
export default function FruitCard(props){
  return (
    <div>
      <h1 className="text-3xl text-center">{props.name}</h1>
      <div className="flex justify-center">
        <div className="w-4/5 border border-2 border-rose-500 rounded-xl">
          <div className="p-6">
            <img src={props.imgSrc} />
          </div>
        </div>
      </div>
    </div>
  );
}