const socket = io();

socket.on('stats-updated', (stats) => {
  document.getElementById('total').innerText = stats.total;
  document.getElementById('totalGold').innerText = stats.totalGold;
  document.getElementById('totalRed').innerText = stats.totalRed;
  document.getElementById('totalGreen').innerText = stats.totalGreen;
  document.getElementById('totalPurple').innerText = stats.totalPurple;
  document.getElementById('totalOrange').innerText = stats.totalOrange;
  document.getElementById('recentlyChecked').innerText = stats.recentlyChecked;
});
