// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
      name: 'Products',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Rice', 'Wheat', 'Apple', 'Potato', 'Tomato'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Quintals sold',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Rice prices for last six months per kg',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: '',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: '',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const canvas = document.getElementById('pieChart');
const ctx = canvas.getContext('2d');

// Sample data
const data = [30, 20, 15, 35]; // Percentages for each slice
const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']; // Colors for each slice
const labels = ['Rice', 'Wheat', 'Tomato', 'Paddy ']; // Labels corresponding to each slice

// Animation variables
let startTime;
const duration = 2000; // Total duration of the animation in milliseconds

// Easing function (easeOutQuad)
function easeOutQuad(t) {
    return t * (2 - t);
}

function drawSubscripts(labels, colors) {
    ctx.font = '16px Arial';
    ctx.textAlign = 'left';

    labels.forEach((label, index) => {
        const x = 10;
        const y = canvas.height - (labels.length - index) * 20;

        ctx.fillStyle = colors[index];
        ctx.fillRect(x, y - 15, 15, 15); // Small color box

        ctx.fillStyle = '#fff'; // Text color
        ctx.fillText(label, x + 20, y);
    });
}

function animatePieChart(timestamp, data, colors, labels) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    // Calculate the progress (0 to 1)
    const progress = Math.min(elapsed / duration, 1);
    const easingProgress = easeOutQuad(progress);

    let startAngle = 0;

    // Clear the canvas before each frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    data.forEach((value, index) => {
        const sliceAngle = (value / 100) * 2 * Math.PI;
        const endAngle = startAngle + sliceAngle * easingProgress;

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = colors[index];
        ctx.fill();

        startAngle += sliceAngle;
    });

    drawSubscripts(labels, colors);

    // Continue the animation until the pie chart is fully drawn
    if (progress < 1) {
        requestAnimationFrame((timestamp) => animatePieChart(timestamp, data, colors, labels));
    }
}

// Start the animation
requestAnimationFrame((timestamp) => animatePieChart(timestamp, data, colors, labels));




const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

document.addEventListener('DOMContentLoaded', () => {
    const cropSelect = document.getElementById('cropSelect');
    const cropInfo = document.getElementById('cropInfo');

    const cropData = {
        rice: "Rice is a staple food for more than half of the world's population.",
        wheat: "Wheat is a major cereal grain and a staple food for many cultures.",
        corn: "Corn is widely used in food products and as animal feed.",
        soybean: "Soybean is known for its high protein content and is used in various products."
    };

    cropSelect.addEventListener('change', (event) => {
        const selectedCrop = event.target.value;
        cropInfo.textContent = cropData[selectedCrop] || "Information not available.";
    });
});

