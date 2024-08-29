async function getRandomDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('dogImage').src = data.message;
    } catch (error) {
        console.error('Error fetching the dog image:', error);
        document.getElementById('dogImage').alt = 'Error fetching the dog image';
    }
}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const isDarkTheme = body.classList.contains('dark-theme');

    if (isDarkTheme) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.classList.remove('dark');
        themeToggle.classList.add('light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.classList.remove('light');
        themeToggle.classList.add('dark');
    }
}


document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(error => {
        console.log('Falha ao registrar o Service Worker:', error);
      });
  });
}
