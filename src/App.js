import "./App.css";
import "./Weather.css";
import Weather from "./Weather";
import Contacts from "./Contacts";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather Search Engine</h1>
        </header>
        <main className="Forecast">
          {" "}
          <Weather defaultCity="New York" />
        </main>
        <footer>
          <Contacts />
        </footer>
      </div>
    </div>
  );
}

export default App;
