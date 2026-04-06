document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const statusText = document.getElementById('status-text');
    
    const statuses = [
        'Initializing...',
        'Loading assets...',
        'Fetching data...',
        'Configuring environment...',
        'Finalizing...'
    ];

    let progress = 0;
    let statusIndex = 0;

    const interval = setInterval(() => {
        // Randomly increment progress to simulate real loading behavior
        progress += Math.random() * 5;

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            statusText.textContent = 'Complete!';
            statusText.style.color = '#38bdf8';
            
            // Optional: Add a small delay before "finishing"
            setTimeout(() => {
                document.querySelector('.loader-container').style.opacity = '0';
                document.querySelector('.loader-container').style.transition = 'opacity 1s ease';
            }, 500);
        }

        progressBar.style.width = `${progress}%`;

        // Update status text based on progress
        const currentStatusThreshold = (statusIndex + 1) * (100 / statuses.length);
        if (progress >= currentStatusThreshold && statusIndex < statuses.length - 1) {
            statusIndex++;
            statusText.textContent = statuses[statusIndex];
        }

    }, 150);
});