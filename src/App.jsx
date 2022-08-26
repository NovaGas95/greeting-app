import './App.css';
import Time from './components/time/Time'
import Greeting from './components/greeting/Greeting'

function App() {
  return (
    <div className="app-wrapper">
      <div className="App">

       <div>
          <Time />
        </div>
        <div className="item3">
          <Greeting />
      </div>

      </div>
    </div>
  );
}



export default App;
