import logo from "../assets/holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          position: "fixed",
          top: "15%",
          width: "100%",
          height: "30%",
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p
          style={{
            display: "inline-block",
            position: "absolute",
            top: "40%",
            left: "-2%",
          }}
        >
          Login to access the full dashboard
        </p>
        <label
          For="email"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "55%",
            left: "1.3%",
          }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "55%",
            left: "4%",
          }}
        />
        <label
          For="pwd"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "55%",
            left: "15%",
          }}
        >
          Password:{" "}
        </label>
        <input
          type="password"
          id="pwd"
          style={{
            display: "inline-block",
            position: "absolute",
            top: "55%",
            left: "19.5%",
          }}
        />
        <button
          style={{
            display: "inline-block",
            position: "absolute",
            top: "55%",
            left: "30%",
          }}
        >
          OK
        </button>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
