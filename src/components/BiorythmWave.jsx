import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function BiorythmWave({ currentUser }) {
  if (!currentUser) {
    // If currentUser is not defined, return a message or placeholder
    return <div></div>;
  }
  const today = new Date();
  const chartRef = useRef(null);

  // Calculate biorythm values relative to the user's birthdate
  const calculateBiorythm = (days, birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    const diffDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

    const physical = -Math.sin((2 * Math.PI * (days - diffDays)) / 23);
    const emotional = -Math.sin((2 * Math.PI * (days - diffDays)) / 28);
    const intellectual = -Math.sin((2 * Math.PI * (days - diffDays)) / 33);

    return { physical, emotional, intellectual };
  };

  // Generate data for the chart
  const generateChartData = () => {
    const birthDate = new Date(currentUser.birthdate);
    const today = new Date();
    const diffDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

    const labels = [];
    const physicalData = [];
    const emotionalData = [];
    const intellectualData = [];
    const avgData = [];

    // Generate data for 33 days ahead and 33 days back from the user's birthdate
    for (let i = -33; i <= 33; i++) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);
      labels.push(currentDate.toLocaleDateString());

      // Calculate biorythm values for the current date relative to the birthdate
      const biorythmValues = calculateBiorythm(i, currentUser.birthdate);
      physicalData.push(biorythmValues.physical);
      emotionalData.push(biorythmValues.emotional);
      intellectualData.push(biorythmValues.intellectual);
      const average =
        (biorythmValues.physical +
          biorythmValues.emotional +
          biorythmValues.intellectual) /
        3;
      avgData.push(average);
    }

    return {
      labels,
      datasets: [
        {
          label: "Physical",
          data: physicalData,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          label: "Emotional",
          data: emotionalData,
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
        },
        {
          label: "Intellectual",
          data: intellectualData,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
        {
          label: "Average",
          data: avgData,
          borderColor: "rgba(75, 192, 50, 1)",
          backgroundColor: "rgba(75, 192, 50, 0.2)",
        },
      ],
    };
  };

  // Create or update the chart when the component mounts or currentUser changes
  useEffect(() => {
    const chartData = generateChartData();

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create the new chart
    const ctx = document.getElementById("biorythmChart");
    if (ctx) {
      const newChart = new Chart(ctx, {
        type: "line",
        data: chartData,
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: "Date",
              },
            },
            y: {
              title: {
                display: true,
                text: "Biorythm Value",
              },
            },
          },
        },
      });
      // Store the chart instance in the ref
      chartRef.current = newChart;
    }
  }, [currentUser]);

  return (
    <div style={{ overflowX: "auto", width: "100vw" }}>
      {currentUser && (
        <div className="wave-container">
          <h3>{currentUser.name}'s Biorythm Chart</h3>
          <canvas id="biorythmChart" width="800" height="400"></canvas>
        </div>
      )}
    </div>
  );
}
