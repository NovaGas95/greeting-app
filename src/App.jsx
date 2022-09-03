import './App.css';
import Time from './components/time/Time'
import Greeting from './components/greeting/Greeting'
import Weather from './components/weather/Weather';
import Crypto from './components/crypto/Crypto';

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

        <div>
          <Crypto />
        </div>

      </div>
    </div>
  );
}



export default App;
