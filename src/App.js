import logo from './logo.svg';
import './App.css';
import TrafficLight from './traffic-light/traffic-light.jsx';
import { TrafficProvider } from './traffic-light/traffic-light';
import PedestrianButton from './traffic-light/pedestrian-button';

function App() {
  return (
    <TrafficProvider>
      <div className="App">
        <TrafficLight />
        <PedestrianButton />
      </div>
    </TrafficProvider>
  );
}

export default App;
