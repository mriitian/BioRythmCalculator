import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function BiorythmPie({ currentUser }) {
  if (!currentUser) {
    // If currentUser is not defined, return a message or placeholder
    return <div></div>;
  }
  const physicalPieChartRef = useRef(null);
  const emotionalPieChartRef = useRef(null);
  const intellectualPieChartRef = useRef(null);
  const averagePieChartRef = useRef(null);

  // Calculate biorythm values for the current date
  const calculateBiorythm = (date) => {
    const birthDate = new Date(currentUser.birthdate);
    const today = new Date();
    
    const diffDays = Math.floor(
      (today - birthDate) / (1000 * 60 * 60 * 24)
    );
    const physical = Math.sin((2 * Math.PI * diffDays) / 23);

    const emotional = Math.sin((2 * Math.PI * diffDays) / 28);
    const intellectual = Math.sin((2 * Math.PI * diffDays) / 33);

    return { physical, emotional, intellectual };
  };

  // Generate pie chart data for each aspect
  const generatePieChartData = () => {
    const currentDate = new Date();
    const biorythmValues = calculateBiorythm(currentDate);

    const physicalData = biorythmValues.physical * 100; // Convert [-1, 1] range to [0, 100]
    const emotionalData = biorythmValues.emotional * 100; // Convert [-1, 1] range to [0, 100]
    const intellectualData = biorythmValues.intellectual * 100; // Convert [-1, 1] range to [0, 100]
    const average = (physicalData + emotionalData + intellectualData) / 3;
    return { physicalData, emotionalData, intellectualData, average };
  };

  // Create or update the pie charts when the component mounts or currentUser changes
  useEffect(() => {
    const { physicalData, emotionalData, intellectualData, average } =
      generatePieChartData();
    console.log(physicalData);
    // Physical Pie Chart
    if (physicalPieChartRef.current) {
      physicalPieChartRef.current.data.datasets[0].data = [
        physicalData,
        100 - physicalData,
      ];
      physicalPieChartRef.current.update();
    } else {
      physicalPieChartRef.current = new Chart(
        document.getElementById("physicalPieChart"),
        {
          type: "pie",
          data: {
            labels: ["Physical", ""],
            datasets: [
              {
                data: [physicalData, 100 - physicalData],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(0, 0, 0, 0)",
                ],
              },
            ],
          },
        }
      );
    }

    // Emotional Pie Chart
    if (emotionalPieChartRef.current) {
      emotionalPieChartRef.current.data.datasets[0].data = [
        emotionalData,
        100 - emotionalData,
      ];
      emotionalPieChartRef.current.update();
    } else {
      emotionalPieChartRef.current = new Chart(
        document.getElementById("emotionalPieChart"),
        {
          type: "pie",
          data: {
            labels: ["Emotional", ""],
            datasets: [
              {
                data: [emotionalData, 100 - emotionalData],
                backgroundColor: [
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(0, 0, 0, 0)",
                ],
              },
            ],
          },
        }
      );
    }

    // Intellectual Pie Chart
    if (intellectualPieChartRef.current) {
      intellectualPieChartRef.current.data.datasets[0].data = [
        intellectualData,
        100 - intellectualData,
      ];
      intellectualPieChartRef.current.update();
    } else {
      intellectualPieChartRef.current = new Chart(
        document.getElementById("intellectualPieChart"),
        {
          type: "pie",
          data: {
            labels: ["Intellectual", ""],
            datasets: [
              {
                data: [intellectualData, 100 - intellectualData],
                backgroundColor: [
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(0, 0, 0, 0)",
                ],
              },
            ],
          },
        }
      );
    }

    if (averagePieChartRef.current) {
      averagePieChartRef.current.data.datasets[0].data = [
        average,
        100 - average,
      ];
      averagePieChartRef.current.update();
    } else {
      averagePieChartRef.current = new Chart(
        document.getElementById("averagePieChart"),
        {
          type: "pie",
          data: {
            labels: ["Average", ""],
            datasets: [
              {
                data: [average, 100 - average],
                backgroundColor: ["rgba(75, 192, 0, 0.6)", "rgba(0, 0, 0, 0)"],
              },
            ],
          },
        }
      );
    }
  }, [currentUser]);

  return (
    <div>
      {currentUser && (
        <div className="pie-box">
          <h3 style={{ textAlign: "center" }}>
            {currentUser.name}'s Biorythm Data
          </h3>
          <div className="pie-container">
            <canvas id="physicalPieChart" width="25" height="25"></canvas>
            <canvas id="emotionalPieChart" width="25" height="25"></canvas>
            <canvas id="intellectualPieChart" width="25" height="25"></canvas>
            <canvas id="averagePieChart" width="25" height="25"></canvas>
          </div>
        </div>
      )}
    </div>
  );
}
