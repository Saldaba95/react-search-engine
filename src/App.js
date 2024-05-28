import "./App.css";
import "./Weather.css";
import Weather from "./Weather";
import Contacts from "./Contacts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
      </header>
      <main className="Forecast">
        {" "}
        <Weather />
      </main>
      <footer>
        <Contacts />
      </footer>
    </div>
  );
}

export default App;
