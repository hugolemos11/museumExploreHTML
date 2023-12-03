// Configuração do gráfico
var config = {
    type: 'bar',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'Número de pedidos',
            data: [10, 15, 12, 18, 14, 20, 25],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Renderização do gráfico
var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, config);