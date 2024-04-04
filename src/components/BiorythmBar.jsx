import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function BiorythmBar({ date, currentUser }) {
  if (!currentUser) {
    // If currentUser is not defined, return a message or placeholder
    return <div>No user selected</div>;
  }
  const barChartRef = useRef(null);

  // Calculate biorythm values for the specified date relative to the birthdate
  const calculateBiorythm = (birthdate, currentDate) => {
    const birthDate = new Date(birthdate);
    const today = new Date(currentDate);
    const diffDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

    const physical = Math.sin((2 * Math.PI * diffDays) / 23);
    const emotional = Math.sin((2 * Math.PI * diffDays) / 28);
    const intellectual = Math.sin((2 * Math.PI * diffDays) / 33);
    const average = (physical + emotional + intellectual) / 3;
    return { physical, emotional, intellectual, average };
  };

  // Generate bar chart data
  const generateBarChartData = () => {
    const biorythmValues = calculateBiorythm(currentUser.birthdate, date);

    return {
      labels: ["Physical", "Emotional", "Intellectual", "Average"],
      datasets: [
        {
          label: "Biorythm Data",
          data: [
            biorythmValues.physical,
            biorythmValues.emotional,
            biorythmValues.intellectual,
            biorythmValues.average,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(75, 192, 0, 0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 0, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  // Create or update the bar chart when the component mounts or date/currentUser changes
  useEffect(() => {
    const barChartData = generateBarChartData();

    // Destroy the previous bar chart instance if it exists
    if (barChartRef.current) {
      barChartRef.current.destroy();
    }

    // Create the new bar chart
    const ctx = document.getElementById("biorythmBarChart");
    if (ctx) {
      const newBarChart = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Biorythm Value",
              },
            },
          },
        },
      });
      // Store the bar chart instance in the ref
      barChartRef.current = newBarChart;
    }
  }, [date, currentUser]);

  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <h3>Biorythm Bar Chart for {date}</h3>
      <canvas id="biorythmBarChart" width="400" height="400"></canvas>
    </div>
  );
}
