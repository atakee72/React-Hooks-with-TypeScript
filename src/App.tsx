import "./App.css";
import UseContextComponent from "./components/UseContextComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseStateComponent from "./components/UseStateComponent";

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <br />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <br />
      <h1>useContext</h1>
      <UseContextComponent />
    </div>
  );
}

export default App;
