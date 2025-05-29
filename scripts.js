
  const ctx = document.getElementById('timeChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'Minutes Spent',
        data: [20, 30, 40, 35, 25],
        borderColor: 'rgba(122, 90, 245, 1)',
        backgroundColor: 'rgba(122, 90, 245, 0.2)',
        fill: true,
        tension: 0.3,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: 'white' } },
        title: {
          display: true,
          text: 'Time Spent on Tasks',
          color: 'white'
        }
      },
      scales: {
        x: { ticks: { color: 'white' } },
        y: { ticks: { color: 'white' }, beginAtZero: true }
      }
    }
  });
