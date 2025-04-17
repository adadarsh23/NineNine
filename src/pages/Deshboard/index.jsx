
import React from "react";
import Plotly from "../../component/Sidebar/plot.jsx";
import Piplot from "../../component/Sidebar/piplot.jsx";
import  Card  from "../../component/Sidebar/card.jsx";
import Footer from "../../component/Sidebar/footer.jsx";
import Navbar from "../../component/Sidebar/Navbar.jsx";
import Top from "../../component/Sidebar/Top.jsx";

const Deshboard = () => {
  const chartData = [
    {
      x: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      y: [12, 9, 15, 11, 14, 10, 8],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "blue" },
    },
    {
      type: "bar",
      x: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      y: [12, 14, 6, 8, 18, 12, 19],
      marker: { color: "pink" },
    },
  ];

  const chartLayout = {
    title: { text: "Daily Sales Data" },
    width: 900,
    height: 350,
    paper_bgcolor: "#aaadb3",
    plot_bgcolor: "#273d6b",
  };
  const pieData = [
    {
      values: [40, 30, 20, 10],
      labels: ["Product A", "Product B", "Product C", "Product D"],
      type: "pie",
      hole: 0.3,
      textinfo: "label+percent",
      textposition: "inside",
      marker: {
        colors: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
      },
    },
  ];

  const pieLayout = {
    title: { text: "Product Sales Distribution" },
    width: 700,
    height: 400,
    paper_bgcolor: "#f3f4f6",
    plot_bgcolor: "#ffffff",
  };
  return (
    <>
      <div className="container">
        <Navbar/>
      </div>
      <div>
        <Top/>
      </div>
      <div className=" container ">
        <Plotly data={chartData} layout={chartLayout} />
      </div>
      <div className="container">
        <Piplot data={pieData} layout={pieLayout} />
      </div>
      <div className="container ">
        <Card/>
      </div>
      <div className="container ">
        <Footer/>
      </div>
      
    </>
  );
};

export default Deshboard;

