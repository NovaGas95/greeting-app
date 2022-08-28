import './App.css';
import Time from './components/time/Time'
import Greeting from './components/greeting/Greeting'
import Weather from './components/weather/Weather';

function App() {
  return (
    <div className="app-wrapper">
      <div className="App">

        <div>
          <Time />
        </div>
        <div>
          <Greeting />
        </div>

        <div>
          <Weather />
        </div>

      </div>
    </div>
  );
}



export default App;
