import './App.css';
import SearchWithSuggestion from "./components/SearchWithSuggestion";

function App() {
  return (
    <div className="App">
      <div className="flex min-h-screen justify-center overflow-hidden bg-gradient-to-br from-sky-500 via-teal-300 to-cyan-500">
          <SearchWithSuggestion/>
      </div>
    </div>
  );
}

export default App;
