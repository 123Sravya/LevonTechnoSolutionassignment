import React, { useContext } from 'react';
import { TrafficContext } from './traffic-light';

const PedestrianButton = () => {
  const { dispatch } = useContext(TrafficContext);

  return (
    <button onClick={() => dispatch({ type: 'REQUEST_CROSSING' })}>
      Request Pedestrian Crossing
    </button>
  );
};

export default PedestrianButton;
