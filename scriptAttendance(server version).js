// Sample data for the attendance chart (replace with your actual data)
const attendanceData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{
    label: 'Attendance Rate',
    data: [80, 90, 75, 95],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

// Create the attendance chart using Chart.js
const ctx = document.getElementById('attendanceChart').getContext('2d');
const attendanceChart = new Chart(ctx, {
  type: 'line',
  data: attendanceData,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 5
        }
      }
    }
  }
});

const attendanceTable = document.getElementById('attendanceTable');
const rowsPerPage = 5;
let currentPage = 1;

function showPage(pageNumber) {
  const startIndex = (pageNumber - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;   


  for (let i = 0; i < attendanceTable.rows.length; i++) {
    attendanceTable.rows[i].style.display = 'none';
  }

  for (let i = startIndex; i < endIndex; i++) {
    if (attendanceTable.rows[i]) {
      attendanceTable.rows[i].style.display = 'table-row';
    }
  }
}

showPage(currentPage);

document.querySelector('.prev-button').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

document.querySelector('.next-button').addEventListener('click', () => {
  const totalPages = Math.ceil(attendanceTable.rows.length / rowsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
});