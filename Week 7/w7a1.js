const ctxPie = document.getElementById("pieChart");
const ctxBar = document.getElementById("barChart");
const ctxDough = document.getElementById("doughChart");

const CHART_COLORS_PIE = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

const CHART_COLORS_BAR = {
  red: "rgb(245, 183, 177)",
  orange: "rgb(235, 152, 78)",
  yellow: "rgb(252, 243, 207)",
  green: "rgb(163, 228, 215)",
  blue: "rgb(133, 193, 233)",
  purple: "rgb(215, 189, 226)",
  grey: "rgb(229, 231, 233)",
};

const CHART_COLORS_DOUGH = {
  red: "rgb(245, 183, 177)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(252, 243, 207)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(133, 193, 233)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(229, 231, 233)",
};

const labels = ["Apple", "Orange", "Peach", "Banana", "Grapes"];
const chartData = [40, 15, 20, 5, 80];

const dataPie = {
  labels: labels,
  datasets: [
    {
      label: "Pie Chart",
      data: chartData,
      backgroundColor: Object.values(CHART_COLORS_PIE),
    },
  ],
};

const dataBar = {
  labels: labels,
  datasets: [
    {
      label: "Number of Fruits",
      data: chartData,
      backgroundColor: Object.values(["rgb(69, 179, 157)"]),
    },
  ],
};

const dataDough = {
  labels: labels,
  datasets: [
    {
      label: "Doughnut Chart",
      data: chartData,
      backgroundColor: Object.values(CHART_COLORS_DOUGH),
    },
  ],
};

const pieChart = new Chart(ctxPie, {
  type: "pie",
  data: dataPie,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Pie Chart",
      },
    },
  },
});

const barChart = new Chart(ctxBar, {
  type: "bar",
  data: dataBar,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
  },
});

const doughChart = new Chart(ctxDough, {
  type: "doughnut",
  data: dataDough,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doughnut Chart",
      },
    },
  },
});

const buttonAdd = document.getElementById("btnAdd");
const btnUpdate = document.getElementById("btnUpdate");
const btnDelete = document.getElementById("btnDelete");
const dataLabel = document.getElementById("label");
const dataValue = document.getElementById("value");

buttonAdd.addEventListener("click", () => {
  //get the value of the input
  labels.push(dataLabel.value);
  chartData.push(dataValue.value);
  pieChart.update();
  barChart.update();
  doughChart.update();
});

btnUpdate.addEventListener("click", () => {
  //Check the value exist in the array
  if (labels.includes(dataLabel.value)) {
    //get the index of the value
    const index = labels.indexOf(dataLabel.value);
    //update the value
    chartData[index] = dataValue.value;
  } else {
    alert("The label does not exist");
  }
  pieChart.update();
  barChart.update();
  doughChart.update();
});

btnDelete.addEventListener("click", () => {
  //Check the value exist in the array
  if (labels.includes(dataLabel.value)) {
    //get the index of the value
    const index = labels.indexOf(dataLabel.value);
    labels.splice(index, 1);
    chartData.splice(index, 1);
  } else {
    alert("The label does not exist");
  }
  pieChart.update();
  barChart.update();
  doughChart.update();
});
