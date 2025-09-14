// Detectar clicks en menú lateral
document.querySelectorAll(".sidebar ul li a").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let section = this.getAttribute("data-section");
        alert("Abrir sección: " + section);
    });
});

// Iconos del header
document.querySelectorAll("header .icons i").forEach(icon => {
    icon.addEventListener("click", () => {
        alert("Clic en icono: " + icon.classList[1]);
    });
});

// Chart.js Configuración
const salesChart = new Chart(document.getElementById("salesChart"), {
    type: 'line',
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3, 9],
            borderColor: '#6a1b9a',
            backgroundColor: 'rgba(106, 27, 154, 0.2)',
            fill: true
        }]
    }
});

const emailChart = new Chart(document.getElementById("emailChart"), {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: 'Emails',
            data: [50, 75, 150, 100, 200],
            backgroundColor: '#ff9800'
        }]
    }
});

const tasksChart = new Chart(document.getElementById("tasksChart"), {
    type: 'line',
    data: {
        labels: ["9a", "12p", "3p", "6p", "9p"],
        datasets: [{
            label: 'Tasks',
            data: [5, 9, 4, 7, 3],
            borderColor: '#f44336',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            fill: true
        }]
    }
});

// Simulación: actualización de datos cada 5 segundos
setInterval(() => {
    salesChart.data.datasets[0].data.push(Math.floor(Math.random() * 20));
    salesChart.data.labels.push("New");
    salesChart.update();
}, 5000);
