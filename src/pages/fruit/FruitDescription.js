import PropTypes from 'prop-types';

export default function FruitDescription (props) {
  return (
    <div className="flex justify-center">
    <div className="w-2/3 rounded-3xl border-2 border-rose-600 p-4 m-4">
      <p>Origin: {props.origin}</p>
      <p>Smelliness: {props.smelliness}</p>
    </div>
  </div>
  );
}

FruitDescription.propTypes = {
  origin: PropTypes.string,
  smelliness: PropTypes.number
}
