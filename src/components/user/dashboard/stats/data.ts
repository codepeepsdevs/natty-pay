export const statsLineOption = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        color: "#797B86",
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: "#EFF0F3",
        drawBorder: false,
      },
      ticks: {
        color: "#797B86",
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
      align: "end",

      labels: {
        boxWidth: 10,
        color: "#797B86",
      },
    },
    title: {
      display: false,
      text: "Earnings (₦)",
      position: "bottom",
      color: "#797B86",
    },
  },
};

export const statsPieOption = {
  responsive: true,

  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 5,
        padding: 15,
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: false,
      text: "Insight",
      position: "bottom",
    },
  },
};
