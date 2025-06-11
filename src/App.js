import React, { useState } from "react";
import { fetchMindMap } from "./api";
import MindMap from "./components/MindMap";

function App() {
  const [text, setText] = useState("");
  const [graphData, setGraphData] = useState(null);

  const handleGenerate = async () => {
    const result = await fetchMindMap(text);
    setGraphData(result);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🧠 GPT-Based Mind Map Generator</h1>
      <textarea
        rows={6}
        cols={60}
        placeholder="Enter a paragraph of text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleGenerate} style={{ marginTop: "1rem" }}>
        Generate Mind Map
      </button>
      <div style={{ marginTop: "2rem" }}>
        {graphData && <MindMap nodes={graphData.nodes} edges={graphData.edges} />}
      </div>
    </div>
  );
}

export default App;
