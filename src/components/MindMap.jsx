import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";

function MindMap({ nodes, edges }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!nodes || !edges) return;

    const data = { nodes, edges };
    const options = {
      nodes: {
        shape: "dot",
        size: 16,
        font: { size: 16, color: "#333" },
      },
      edges: {
        arrows: "to",
        smooth: true,
      },
      physics: {
        stabilization: true,
      },
    };
    const network = new Network(containerRef.current, data, options);

    return () => network.destroy();
  }, [nodes, edges]);

  return (
    <div
      ref={containerRef}
      style={{ height: "600px", border: "1px solid #ccc", marginTop: "20px" }}
    />
  );
}

export default MindMap;
