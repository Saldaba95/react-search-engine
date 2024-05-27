import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

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
        {" "}
        <p className="Contacts">
          Let's stay connected... <br />
          Check out my{" "}
          <a
            className="Github"
            href="https://github.com/Saldaba95/react-search-engine"
            target="blank"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            className="Shecodes"
            href="https://www.shecodes.io/graduates/66500-sarei-aldaba"
            target="blank"
          >
            SheCodes
          </a>
          .
        </p>{" "}
      </footer>
    </div>
  );
}

export default App;
