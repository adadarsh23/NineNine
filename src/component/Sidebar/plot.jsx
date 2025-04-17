import React from "react";
import Plot from "react-plotly.js";

function Plotly({ data, layout }) {
  return (
    <div className=" plot-container   w-auto p-4 bg-white shadow-lg rounded-lg ">
      <Plot
        data={
          data || [
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
            { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
          ]
        }
        layout={{
          ...layout,
          width: layout?.width || 800,
          height: layout?.height || 400,
          title: layout?.title || { text: "Weekly Revenue" },
          margin: { l: 40, r: 40, t: 60, b: 40 },
          paper_bgcolor: layout?.paper_bgcolor || "#f8fafc",
          plot_bgcolor: layout?.plot_bgcolor || "#ffffff",
          font: {
            family: "Inter, sans-serif",
            size: 15,
            color: "#242222",
          },
          xaxis: {
            gridcolor: "#e5e7eb",
            linecolor: "#cbd5e1",
            tickfont: { color: "#64748b" },
          },
          yaxis: {
            gridcolor: "#e5e7eb",
            linecolor: "#cbd5e1",
            tickfont: { color: "#64748b" },
          },
          legend: {
            font: { size: 12 },
            x: 0,
            y: 1,
            xanchor: "left",
            yanchor: "top",
            orientation: "h",
            margin: { t: 10, l: 10 },
          },
          hovermode: "x unified",
        }}
        config={{
          responsive: true,
          modeBar: {
            color: "#1e293b",
            background: "#ffffff",
          },
        }}
      />
    </div>
  );
}

export default Plotly;
