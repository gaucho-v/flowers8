const flowers = document.querySelectorAll('.flower');

flowers.forEach(flower => {
    flower.addEventListener('mouseover', () => {
        flower.style.backgroundColor = '#ffcc00'; // Меняем цвет
        flower.style.transform = 'scale(1.5)';
    });

    flower.addEventListener('mouseout', () => {
        flower.style.backgroundColor = '#ff6f61'; // Возвращаем цвет
        flower.style.transform = 'scale(1)';
    });
});

window.addEventListener('load', () => {
    const audio = document.getElementById('theme_song');
    const loadingScreen = document.getElementById('loading-screen');
    const card = document.getElementById('card');
    const playPauseBtn = document.getElementById('play-pause-btn');

    // Показываем экран загрузки
    loadingScreen.style.display = 'flex';

    // Пытаемся загрузить аудио
    audio.load();
    audio.play().then(() => {
        // Если аудио загружено и воспроизводится, скрываем экран загрузки
        loadingScreen.style.display = 'none';
        card.style.display = 'flex';
    }).catch((error) => {
        // Если произошла ошибка (например, автовоспроизведение запрещено)
        console.error('Ошибка воспроизведения аудио:', error);
        loadingScreen.innerHTML = '<p>Нажмите на экран, чтобы включить музыку.</p>';
        loadingScreen.addEventListener('click', () => {
            audio.play();
            loadingScreen.style.display = 'none';
            card.style.display = 'flex';
        });
    });

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = '🔊';
        } else {
            audio.pause();
            playPauseBtn.textContent = '🔈';
        }
    });
});
