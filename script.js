document.getElementById('bookBtn').addEventListener('click', function() {
    loadContent('book.html');
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    loadContent('cancel.html');
});

document.getElementById('rescheduleBtn').addEventListener('click', function() {
    loadContent('reschedule.html');
});

document.getElementById('dashboardBtn').addEventListener('click', function() {
    loadContent('dashboard.html');
});

function loadContent(page) {
    fetch(page)
    .then(response => response.text())
    .then(data => {
        document.getElementById('mainContent').innerHTML = data;
    });
}
