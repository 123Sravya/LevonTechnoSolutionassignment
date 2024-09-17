import React, { useContext } from 'react';
import { TrafficContext } from './traffic-light';
import Styles from './traffic-light.css'


const TrafficLight = () => {
  const { state } = useContext(TrafficContext);

  return (
    <div className={Styles.trafficLight}>
      <div className={`light ${state.currentLight === 'red' ? 'active' : ''}`} style={{ backgroundColor: 'red' }} />
      <div className={`light ${state.currentLight === 'yellow' ? 'active' : ''}`} style={{ backgroundColor: 'yellow' }} />
      <div className={`light ${state.currentLight === 'green' ? 'active' : ''}`} style={{ backgroundColor: 'green' }} />
    </div>
  );
};

export default TrafficLight;

