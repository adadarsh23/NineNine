import React from 'react';
import Plot from 'react-plotly.js';

function Piplot({ data, layout }) {
  return (
    <div className="piplot-container  w-full max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <Plot
        data={
          data || [
            {
              values: [50, 25, 25],
              labels: ['Category A', 'Category B', 'Category C'],
              type: 'pie',
              hole: 0.4, // For a donut chart effect
              textinfo: 'label+percent',
              textposition: 'inside',
              marker: {
                colors: ['#636efa', '#ef553b', '#00cc96'],
              },
            },
          ]
        }
        layout={{
          ...layout,
          width: layout?.width || 800,
          height: layout?.height || 400,
          title: layout?.title || { text: 'Weekly Revenue Breakdown' },
          paper_bgcolor: layout?.paper_bgcolor || '#f9fafb',
          plot_bgcolor: layout?.plot_bgcolor || '#ffffff',
          margin: { l: 40, r: 40, t: 60, b: 40 },
          font: {
            family: 'Inter, sans-serif',
            size: 15,
            color: '#242222',
          },
          legend: {
            font: { size: 12 },
            x: 1,
            y: 0.5,
            xanchor: 'right',
            yanchor: 'middle',
          },
        }}
        config={{
          responsive: true,
        }}
      />
    </div>
  );
}

export default Piplot;

