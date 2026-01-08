cript.js (Column chart)
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
