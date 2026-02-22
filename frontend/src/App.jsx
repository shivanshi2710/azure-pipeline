import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const callApi = async () => {
    const res = await fetch("/api/message");
    const json = await res.json();
    setData(json);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>React Frontend ✅</h1>
      <button onClick={callApi}>Call Backend</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;