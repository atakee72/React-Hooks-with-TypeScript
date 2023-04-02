import "./App.css";
import CustomHookComponent from "./components/CustomHookComponent";
import UseContextComponent from "./components/UseContextComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseReducerComponent from "./components/useReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";

function App() {
  return (
    <div>
      <h1>Custom Hook</h1>
      <CustomHookComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <br />
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
