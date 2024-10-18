
export default function FruitCard(){
  return (
    <div>
      <h1 className="text-3xl text-center">Durian</h1>
      <div className="flex justify-center">
        <div className="w-4/5 border border-2 border-rose-500 rounded-xl">
          <div className="p-6">
            <img src="/durian.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}