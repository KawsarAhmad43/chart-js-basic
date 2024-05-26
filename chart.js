
document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('userCategoryChart').getContext('2d');

    const data = {
        labels: ['Activated', 'None'],
        datasets: [{
            label: 'User Categories',
            data: [30, 20], // Example data
            backgroundColor: ['skyblue', 'red']
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const userCategoryChart = new Chart(ctx, config);
});
