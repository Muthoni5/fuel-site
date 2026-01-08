
const ctx = document.getElementById('fuelChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Fuel (Liters)',
        data: [120, 150, 180, 140, 200, 170, 160],
        backgroundColor: '#ff9800'
      },
      {
        label: 'Distance (KM)',
        data: [300, 420, 500, 380, 600, 520, 480],
        backgroundColor: '#03a9f4'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: 'white' }
      }
    },
    scales: {
      x: {
        ticks: { color: 'white' }
      },
      y: {
        ticks: { color: 'white' }
      }
    }
  }
});

function calculateVehicleStats() {
  const today = new Date();
  const rows = document.querySelectorAll(".vehicle-table tbody tr");

  let total = 0;
  let active = 0;
  let expiring = 0;
  let expired = 0;

  rows.forEach(row => {
    total++;

    const statusCell = row.querySelector(".status");
    const expiryCell = row.querySelector("[data-expiry]");

    if (statusCell && statusCell.classList.contains("active")) {
      active++;
    }

    if (expiryCell) {
      const expiryDate = new Date(expiryCell.dataset.expiry);
      const diffDays = Math.ceil(
        (expiryDate - today) / (1000 * 60 * 60 * 24)
      );

      if (diffDays < 0) {
        expired++;
      } else if (diffDays <= 30) {
        expiring++;
      }
    }
  });

  document.getElementById("totalVehicles").textContent = total;
  document.getElementById("activeVehicles").textContent = active;
  document.getElementById("expiringLicences").textContent = expiring;
  document.getElementById("expiredLicences").textContent = expired;
}

document.addEventListener("DOMContentLoaded", calculateVehicleStats);
