//ChartsJs
document.addEventListener('DOMContentLoaded', () => {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const ctx2 = document.getElementById('chart2').getContext('2d');
    // const ctx3 = document.getElementById('chart3').getContext('2d');
    const ctx4 = document.getElementById('chart4').getContext('2d');
  
    
    // Create chart instances
    const ctx3 = document.getElementById('chart3').getContext('2d');

    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [
                {
                    label: 'النقد من العمليات التشغيلية',
                    data: [74, 74, 247, 28, 194, 197],
                    backgroundColor: '#062E4A',
                    barThickness: 112, // Smaller bar width
                    borderWidth: 1,
                    order: 2 // Ensure bars are drawn below the line
                },
                {
                    label: 'نسبة التحول النقدي',
                    data: [0.34, 0.26, 1.35, 0.19, 1.79, 2.07], // Percentage values
                    type: 'line',
                    borderColor: '#B5CADD',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    fill: false,
                    // pointStyle: 'circle',
                    // pointRadius: 5,
                    order: 1, // Ensure line is drawn on top of bars
                    yAxisID: 'y2',
                }
            ]
        },
        options: {
            scales: {
                y: {
                    display: false, // Remove y-axis and ticks
                },
                y2: {
                    display: false // Remove second y-axis as well
                }
            },
            plugins: {
                legend: {
                    display: false // Hide default legend
                },
                datalabels: {
                    color: '#000', // Label color (black)
                    formatter: (value, context) => {
                        // Display percentage with symbol on the line chart
                        if (context.dataset.type === 'line') {
                            return (value * 100).toFixed(0) + '%'; 
                        }
                        return value; // Display regular number on the bar chart
                    },
                    anchor: 'end',
                    align: 'top',
                }
            },
            layout: {
                padding: {
                    bottom: 30 // Add padding below the chart for the labels
                }
            }
        },
        plugins: [ChartDataLabels] // Enables data labels on the bars and lines
    });
});
  
    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.5
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const chartIndex = entry.target.dataset.index;
                charts[chartIndex].update(); // Trigger chart rendering/animation
            }
        });
    }, observerOptions);
  
    document.querySelectorAll('canvas').forEach((canvas, index) => {
        canvas.dataset.index = index; // Mark each chart with its index
        observer.observe(canvas);     // Observe each canvas element
    });
  ;