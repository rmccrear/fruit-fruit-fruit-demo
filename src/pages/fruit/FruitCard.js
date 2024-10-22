import PropTypes from "prop-types";

export default function FruitCard(props){
  return (
    <div>
      <h1 className="text-3xl text-center">{props.name}</h1>
      <div className="flex justify-center">
        <div className="w-4/5 border border-2 border-rose-600 rounded-xl">
          <div className="p-6">
            <img src={props.imgSrc} />
          </div>
        </div>
      </div>
    </div>
  );
}

FruitCard.propTypes = {
  name: PropTypes.string,
  imgSrc: PropTypes.string
}
