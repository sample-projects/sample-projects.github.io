var xPresent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var yPresent = [50, 40, 50, 55, 54, 53, 53, 60, 52, 55, 56];

var presentChart = new Chart("present", {
  type: "line",
  data: {
    labels: xPresent,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        pointRadius: 1,
        borderColor: "hsl(140, 40%, 60%)",
        data: yPresent,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Present",
      fontSize: 16,
    },
    scales: {
      yAxes: [
        { ticks: { min: 30, stepSize: 5 }, gridLines: { display: false } },
      ],
      xAxes: [{ gridLines: { display: false } }],
    },
  },
});

var absentChart = new Chart("absent", {
  type: "line",
  data: {
    labels: xPresent,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        pointRadius: 1,
        borderColor: "hsl(0, 40%, 60%)",
        data: yPresent,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Absent",
      fontSize: 16,
    },
    scales: {
      yAxes: [
        {
          ticks: { min: 40, max: 60, stepSize: 5 },
          gridLines: { display: false },
        },
      ],
      xAxes: [{ gridLines: { display: false } }],
    },
  },
});

var absentChart = new Chart("late", {
  type: "line",
  data: {
    labels: xPresent,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        pointRadius: 1,
        borderColor: "hsl(50, 80%, 80%)",
        data: yPresent,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Late",
      fontSize: 16,
    },
    scales: {
      yAxes: [
        {
          ticks: { min: 40, max: 60, stepSize: 5 },
          gridLines: { display: false },
        },
      ],
      xAxes: [{ gridLines: { display: false } }],
    },
  },
});

$(function () {
  $('input[name="date"]').daterangepicker(
    {
      opens: "right",
    },
    function (start, end, label) {
      console.log(
        "A new date selection was made: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD")
      );
    }
  );
});
