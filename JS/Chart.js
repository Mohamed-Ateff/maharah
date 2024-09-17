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
                    barThickness: 112, 
                    borderWidth: 1,
                    order: 2 
                },
                {
                    label: 'نسبة التحول النقدي',
                    data: [0.34, 0.26, 1.35, 0.19, 1.79, 2.07],
                    type: 'line',
                    borderColor: '#B5CADD',
                    backgroundColor: 'transparent',
                    borderWidth: 5,
                    fill: false,
                    pointStyle: 'none',
                    pointRadius: 0,
                    order: 1,
                    yAxisID: 'y2',
                }
            ]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 30,
                            weight: '700', 
                        },
                        color: '#3A73A8', 
                        padding: 30,
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false 
                },
                y2: {
                    display: false 
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
                      }, color: '#333333', 
                      padding: 5,
                    }
                  },
                datalabels: {
                    color: '#333333', 
                    font: {
                        size: 30, 
                        lineHeight: 29.98 
                    },
                    anchor: 'start',
                    align: 'center',
                    textAlign: 'center',
                    clamp:true,
                    padding: {
                        top: -20, 
                    }, 
                    display:true 
                }
            },
            layout: {
                padding: {
                    bottom: 5 
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
                charts[chartIndex].update(); 
            }
        });
    }, observerOptions);
  
    document.querySelectorAll('canvas').forEach((canvas, index) => {
        canvas.dataset.index = index; 
        observer.observe(canvas);    
    });
  ;