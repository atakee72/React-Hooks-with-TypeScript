import { useState } from "react";

function UseStateComponent() {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <br />
      <div>
        <button onClick={() => setName("Jack")}>Set name</button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}

export default UseStateComponent;
