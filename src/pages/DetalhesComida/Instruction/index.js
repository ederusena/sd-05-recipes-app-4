import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Instruction(props) {
  const { meal } = props;
  return (
    <Fragment>
      <div className="instruc-container">
        <p className="instruc">Intructions</p>
        <div className="intruc-div">
          <p data-testid="instructions">{meal.strInstructions}</p>
        </div>
        <div data-testid="video">
          <p className="instruc">Video</p>
          <iframe
            title="instructions"
            width="340"
            src={meal.strYoutube && meal.strYoutube.replace('watch?v=', 'embed/')}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Instruction;

Instruction.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};
