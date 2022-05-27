import React from "react";

const width = 1000;
const height = 300;

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 40,
      }}
    >
      <p>circle</p>
      <svg width={width} height={height} style={{ backgroundColor: "#eee" }}>
        <circle
          r={120}
          // cx, cy controls the center position of circle
          cx={width * 0.5}
          cy={height * 0.5}
          fill="yellow"
          fillOpacity={0.9}
          strokeWidth={10}
          stroke="orange"
          strokeOpacity={0.25}
        />
      </svg>

      <p>rect</p>
      <svg width={width} height={height} style={{ backgroundColor: "#eee" }}>
        <rect width={100} height={50} x={10} y={10} fill="red" />
        <rect
          width={400}
          height={200}
          // x, y controls the position of rect
          x={(width - 400) * 0.5}
          y={(height - 200) * 0.5}
          fill="cyan"
          fillOpacity={0.2}
          strokeWidth={5}
          stroke="black"
        />
      </svg>

      <p>ellipse</p>
      <svg width={width} height={height} style={{ backgroundColor: "#eee" }}>
        <ellipse
          // rx, ry controls the size of ellipse
          rx={300}
          ry={120}
          // cx, cy controls the center position of ellipse
          cx={width * 0.5}
          cy={height * 0.5}
          fill="yellow"
          stroke="purple"
          strokeWidth={4}
        />
        <ellipse fill="red" cx={100} cy={50} rx={40} ry={20} />
      </svg>

      <p>line</p>
      <svg width={width} height={height} style={{ backgroundColor: "#eee" }}>
        <line
          x1={50}
          y1={50}
          x2={950}
          y2={250}
          stroke="red"
          strokeWidth={20}
          strokeOpacity={0.5}
        />
      </svg>

      <p>polygon</p>
      <svg width={width} height={height} style={{ backgroundColor: "#eee" }}>
        <polygon points="200,0 200,300 0,300" fill="red" stroke="black" />
        <polygon
          points="320,10 400,210 270,250 223,234"
          fill="cyan"
          stroke="orange"
          strokeWidth={4}
        />
        <polygon
          points="500,10 440,198 590,78 410,78 560,198"
          fill="green"
          fillRule="evenodd"
          stroke="black"
        />
      </svg>

      <p>polyline</p>
      <svg width={width} height={height} style={{ backgroundColor: "#eee" }}>
        <polyline
          points="20,20 40,25 60,40 80,120 120,140 200,180"
          fill="none"
          stroke="black"
          strokeWidth={4}
        />
        <polyline
          points="220,20 240,25 260,40 280,120 320,140 400,180"
          fill="red"
          stroke="black"
          strokeWidth={4}
        />
      </svg>
    </div>
  );
}

export default App;
