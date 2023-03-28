import { useState, useEffect } from "react";

function UseEffectComponent() {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((v) => v + 1); //v is the current value
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <div>{val}</div>;
}

export default UseEffectComponent;
