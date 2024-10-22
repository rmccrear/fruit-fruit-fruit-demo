import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FruitLike = (props) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="flex justify-center">
      <div className="border-t-2 p-2 m-2 border-rose-600">
        <span className="mr-2">Support {props.name} by clicking like. ({likes} likes)</span>
        <button onClick={handleLike} className="px-4 py-2 bg-blue-500 text-white rounded">
          Like
        </button>
      </div>
    </div>
  );
};

FruitLike.propTypes = {
  name: PropTypes.string,
};

export default FruitLike;