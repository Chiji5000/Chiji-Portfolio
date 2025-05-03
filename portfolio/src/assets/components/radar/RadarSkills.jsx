import React from "react";
import { Radar } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarSkills = () => {
  const labels = [
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "MySQL",
    "PHP",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "CorelDraw",
    "MS Word",
    "Excel",
    "PowerPoint",
    "Access",
  ];

  const colors = [
    "#e6194b",
    "#3cb44b",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
    "#e6beff",
    "#9a6324",
    "#fffac8",
    "#800000",
    "#aaffc3",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Proficiency (%)",
        data: [90, 85, 95, 90, 93, 88, 80, 84, 92, 89, 86, 87, 95, 90, 91, 85],
        backgroundColor: "rgba(0, 123, 255, 0.15)",
        borderColor: "#007bff",
        borderWidth: 2,
        pointBackgroundColor: colors,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: colors,
        pointHoverBorderColor: "#333",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: "#444",
          backdropColor: "transparent",
          font: {
            size: 12,
            weight: "bold",
          },
        },
        grid: {
          color: "#ccc",
          circular: true,
        },
        pointLabels: {
          color: "#000",
          font: {
            size: 13,
            weight: "bold",
          },
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#007bff",
        bodyColor: "#000",
        borderColor: "#007bff",
        borderWidth: 1,
        padding: 10,
        cornerRadius: 6,
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutBounce",
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        padding: "4rem 2rem",
        background: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: "#333",
        }}
      >
        Skill Proficiency Radar
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <Radar data={data} options={options} />
      </motion.div>

      <hr style={{ marginTop: "3rem", borderColor: "#ccc" }} />
    </motion.section>
  );
};

export default RadarSkills;
