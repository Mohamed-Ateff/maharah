//ChartsJs
document.addEventListener('DOMContentLoaded', () => {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const ctx2 = document.getElementById('chart2').getContext('2d');
    const ctx3 = document.getElementById('chart3').getContext('2d');
    const ctx4 = document.getElementById('chart4').getContext('2d');
  
    
    // Create chart instances
    const data4 = {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
          {
            label: 'إجمالي المطلوبات',
            data: [941, 1103, 1026, 1036, 1708, 1748],
            backgroundColor: 'rgba(3, 4, 71,0.8)',
            borderWidth: 1,
            type: 'bar',
            barPercentage: 1.2,
            order: 1
          },
          {
            label: 'إجمالي الموجودات',
            data: [512, 518, 470, 465, 1051, 1081],
            backgroundColor: 'rgba(46, 121, 179)',
            borderWidth: 1,
            type: 'bar',
            barPercentage: 1.2,
            order: 2
          },
          {
            label: 'صافي الدين إلى نسبة الملكية',
            data: [119, 88, 85, 81, 206, 208],
            borderColor: '#D08C45',
            fill: false,
            type: 'line',
            yAxisID: 'y2',
            order: 3
          }
        ]
      };

    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [
                {
                    label: 'النقد من العمليات التشغيلية',
                    data: [74, 74, 247, 28, 194, 197],
                    backgroundColor: '#062E4A',
                    barThickness: 112, // Bar width
                    borderWidth: 1,
                    order: 2 // Draw bars below the line
                },
                {
                    label: 'نسبة التحول النقدي',
                    data: [0.34, 0.26, 1.35, 0.19, 1.79, 2.07], // Line chart data
                    type: 'line',
                    borderColor: '#B5CADD',
                    backgroundColor: 'transparent',
                    borderWidth: 5,
                    fill: false,
                    pointStyle: 'none',
                    pointRadius: 0,
                    order: 1, // Draw line on top of bars
                    yAxisID: 'y2',
                }
            ]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 30, // Font size
                            weight: '700', // Font weight
                        },
                        color: '#3A73A8', // Font color
                        padding: 30, // Padding to simulate line height
                    },
                    grid: {
                        display: false // Hide grid lines
                    }
                },
                y: {
                    display: false // Hide y-axis and ticks
                },
                y2: {
                    display: false // Hide second y-axis
                }
            },
            plugins: {
                legend: {
                    position: 'bottom', 
                    labels: {
                      boxWidth: 20,
                      boxHeight:20,
                      font: {
                        size: 30,
                        weight:700,
                      }, color: '#333333', // Set font color
                      padding: 5,
                    }
                  },
                datalabels: {
                    color: '#333333', // Bar chart data label color
                    font: {
                        size: 30, // Font size for bar chart data labels
                        lineHeight: 29.98 // Line height for bar chart data labels
                    },
                    anchor: 'start',
                    align: 'center',
                    textAlign: 'center',
                    clamp:true,
                    padding: {
                        top: -20, // Shift the labels up by 20 pixels
                    }, 
                    display:true 
                }
            },
            layout: {
                padding: {
                    bottom: 5 // Padding below chart for labels
                }
            }
        },
        plugins: [ChartDataLabels] // Enables data labels plugin
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