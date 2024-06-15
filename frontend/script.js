document.addEventListener("DOMContentLoaded", function() {
    fetch('/api')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
        })
        .catch(error => {
            document.getElementById('message').textContent = 'Error loading message';
        });
});

