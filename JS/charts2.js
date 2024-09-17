//p5 Charts 2023 2022
const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: function (chart) {
        const ctx = chart.ctx;
        const width = chart.width;
        const height = chart.height;
        ctx.restore();

        const text = chart.options.plugins.centerText.text;
        const fontSize = chart.options.plugins.centerText.fontSize || '32px';
        const fontStyle = chart.options.plugins.centerText.fontStyle || 'bold';
        const color = chart.options.plugins.centerText.color || '#333';
        ctx.font = `${fontStyle} ${fontSize} Arial`;
        ctx.fillStyle = color;
        ctx.textBaseline = 'middle';

        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
    }
};

Chart.register(centerTextPlugin);

const ctx2022 = document.getElementById('chart2022').getContext('2d');
const chart2022 = new Chart(ctx2022, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [339, 197],
            backgroundColor: ['#c7a45e', '#517ea4'],
            borderWidth: 1
        }]
    },
    options: {
        cutout: '70%',
        plugins: {
            tooltip: {
                enabled: false
            },
            centerText: {
                text: '536',
                fontSize: '36px',
                fontStyle: 'bold',
                color: '#333'
            }
        }
    }
});

const ctx2023 = document.getElementById('chart2023').getContext('2d');
const chart2023 = new Chart(ctx2023, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [336, 183],
            backgroundColor: ['#c7a45e', '#517ea4'],
            borderWidth: 1
        }]
    },
    options: {
        cutout: '70%',
        plugins: {
            tooltip: {
                enabled: false
            },
            centerText: {
                text: '519',
                fontSize: '36px',
                fontStyle: 'bold',
                color: '#333'
            }
        }
    }
});

//p5 saudiChart 
document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar) => {
        const height = bar.getAttribute("data-value");
        bar.style.height = height;
    });
});
