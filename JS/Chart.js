//ChartsJs
document.addEventListener('DOMContentLoaded', () => {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const ctx2 = document.getElementById('chart2').getContext('2d');
    const ctx3 = document.getElementById('chart3').getContext('2d');
    const ctx4 = document.getElementById('chart4').getContext('2d');
  
    
    // Create chart instances
    // const data4 = {
    //     labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    //     datasets: [
    //       {
    //         label: 'إجمالي المطلوبات',
    //         data: [941, 1103, 1026, 1036, 1708, 1748],
    //         backgroundColor: 'rgba(3, 4, 71,0.8)',
    //         borderWidth: 1,
    //         type: 'bar',
    //         barPercentage: 1.2,
    //         order: 1
    //       },
    //       {
    //         label: 'إجمالي الموجودات',
    //         data: [512, 518, 470, 465, 1051, 1081],
    //         backgroundColor: 'rgba(46, 121, 179)',
    //         borderWidth: 1,
    //         type: 'bar',
    //         barPercentage: 1.2,
    //         order: 2
    //       },
    //       {
    //         label: 'صافي الدين إلى نسبة الملكية',
    //         data: [119, 88, 85, 81, 206, 208],
    //         borderColor: '#D08C45',
    //         fill: false,
    //         type: 'line',
    //         yAxisID: 'y2',
    //         order: 3
    //       }
    //     ]
    //   };

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
                    order: 2,
                    hidden: false 
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
                    hidden: false 
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
                        boxHeight: 20,
                        font: {
                            size: 30,
                            weight: 700,
                        },
                        color: '#333333',
                        padding: 5,
                    }
                },
                datalabels: {
                    color: '#333333',
                    font: {
                        size: 40,
                    },
                    anchor: 'center',
                    align: 'center',
                    offset: 0,
                    display: true, // Always show labels for bars
                    padding:3

                    
                },
                datalabels_line: {
                    color: '#B5CADD',
                    font: {
                        size: 40,
                    },
                    anchor: 'start',
                    align: 'end',
                    offset: -10,
                }
            },
            animation: {
                duration: 5000,
                easing: 'easeOutExpo',
                onComplete: function() {
                    const ctx = this.ctx;
                    ctx.font = '40px cairo';
                    ctx.textAlign = 'center';  // Ensure the text is centered horizontally
                    ctx.fillStyle = '#000'; 

                    this.data.datasets.forEach((dataset, i) => {
                        this.getDatasetMeta(i).data.forEach((bar, index) => {
                            const dataValue = dataset.data[index];
                            ctx.fillText(
                                dataValue,
                                bar.x,  // Center text horizontally
                                bar.y - 10  // Position text slightly above the bar
                            );
                        });
                    });
                }
            },
            layout: {
                padding: {
                    bottom: 5,
                    top: 100
                }
            }
        },
        // plugins: [ChartDataLabels]
    });

    //chart 2
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [
                {
                    label:'صافي راس المال العامل',
                    data: [239, 371, 380, 293, 203, 136],
                    backgroundColor: '#062E4A',
                    barThickness: 112,
                    borderWidth: 1,
                    order: 2,
                    hidden: false 
                },
                {
                    label: 'معدل النقدية',
                    data: [1.5, 1.85, 1.97, 1.78, 1.43, 1.27],
                    type: 'line',
                    borderColor: '#D9A867',
                    backgroundColor: 'transparent',
                    borderWidth: 5,
                    fill: false,
                    pointStyle: 'none',
                    pointRadius: 0,
                    order: 1,
                    yAxisID: 'y2',
                    hidden: false 
                },
                {
                    label:'معدل السيولة',
                    data: [0.17, 0.43, 0.15, 0.24, 0.18, 0.15],
                    type: 'line',
                    borderColor: '#B5CADD',
                    backgroundColor: 'transparent',
                    borderWidth: 5,
                    fill: false,
                    pointStyle: 'none',
                    pointRadius: 0,
                    order: 1,
                    yAxisID: 'y2',
                    hidden: false 
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
                        boxHeight: 20,
                        font: {
                            size: 30,
                            weight: 700,
                        },
                        color: '#333333',
                        padding: 5,
                    }
                },
                datalabels: {
                    color: '#333333',
                    font: {
                        size: 40,
                    },
                    anchor: 'center',
                    align: 'center',
                    offset: 0,
                    display: true, // Always show labels for bars
                    padding:3

                    
                },
                datalabels_line: {
                    color: '#B5CADD',
                    font: {
                        size: 40,
                    },
                    anchor: 'start',
                    align: 'end',
                    offset: -10,
                }
            },
            animation: {
                duration: 5000,
                easing: 'easeOutExpo',
                onComplete: function() {
                    const ctx = this.ctx;
                    ctx.font = '40px cairo';
                    ctx.textAlign = 'center';  // Ensure the text is centered horizontally
                    ctx.fillStyle = '#000'; 

                    this.data.datasets.forEach((dataset, i) => {
                        this.getDatasetMeta(i).data.forEach((bar, index) => {
                            const dataValue = dataset.data[index];
                            ctx.fillText(
                                dataValue,
                                bar.x,  // Center text horizontally
                                bar.y - 10  // Position text slightly above the bar
                            );
                        });
                    });
                }
            },
            layout: {
                padding: {
                    bottom: 5,
                    top: 100
                }
            }
        },
        // plugins: [ChartDataLabels]
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
  