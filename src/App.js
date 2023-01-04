import logo from './cheshire-cat.png';
import fallingAlice from './falling-alice.gif';
import shakingAlice from './shaking-alice.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Huvudtext">
          We're all mad here
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Arrow">v</p>
      </header>
      <div className="App-details">
        <h3 className="Huvudtext">Details</h3>
        <div className="Detail-section">
          <h3>Time and location</h3>
          <p>Saturday 4th February 18:00</p>
          <p>Skeppargatan 80, 11459 Stockholm</p>
          <h3>Theme and dresscode</h3>
          <img src={shakingAlice} className="Background-alice" alt="falling-alice" />
          <p>Alice in Wonderland - A Mad Tea Party</p>
          <p>Creative black tie</p>
          <h3>RSVP</h3>
          <p>Dinner and drinks will be served</p>
          <p>I love your kids and dogs but please don't bring them with you to the mad house</p>
          <p>Please notify if you will not come</p>
          <h3>Watch the movie for the full experience</h3>
        </div>
      </div>
      <div className="App-details">
         <img src={fallingAlice} className="App-logo" alt="falling-alice" />
      </div>
    </div>
  );
}

export default App;
