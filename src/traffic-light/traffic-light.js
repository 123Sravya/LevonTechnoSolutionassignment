 import React, { useReducer, useEffect, createContext } from 'react';

const initialState = {
  currentLight: 'green',
  timer: 10,
  pedestrianRequest: false,
};

const TrafficContext = createContext();

const trafficReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return { ...state, currentLight: action.payload };
    case 'REQUEST_CROSSING':
      return { ...state, pedestrianRequest: true };
    case 'RESET_TIMER':
      return { ...state, timer: action.payload };
    default:
      return state;
  }
};

const TrafficProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficReducer, initialState);

  useEffect(() => {
    let interval;
     if (state.currentLight === 'green' || state.pedestrianRequest) {
      interval = setTimeout(() => dispatch({ type: 'CHANGE_LIGHT', payload: 'yellow' }), 10000);
    } else if (state.currentLight === 'yellow') {
      interval = setTimeout(() => dispatch({ type: 'CHANGE_LIGHT', payload: 'red' }), 3000);
    } else if (state.currentLight === 'red') {
      interval = setTimeout(() => dispatch({ type: 'CHANGE_LIGHT', payload: 'green' }), 7000);
    }
    return () => clearTimeout(interval);
  }, [state.currentLight]);

  return (
    <TrafficContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficContext.Provider>
  );
};

export { TrafficContext, TrafficProvider };
