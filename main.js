document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.querySelector('.audio-player');
    const playPauseButton = document.querySelector('.play-pause-button');
    const previousButton = document.querySelector('.previous-button');
    const nextButton = document.querySelector('.next-button');
    const autoPlayButton = document.querySelector('.auto-play-button');
    const volumeSlider = document.querySelector('.volume-slider');

    const songs = [
        {
            title: 'Area 21',
            audioSrc: '1.mp3',
            coverSrc: '1.jpg'
        },
        {
            title: 'Avicii',
            audioSrc: '2.mp3',
            coverSrc: '2.jpg'
        },
        {
            title: 'Brooks',
            audioSrc: '3.mp3',
            coverSrc: '3.jpg'
        }
    ];

    let currentSongIndex = 0;
    let isAutoPlayEnabled = false;

    const setSong = (song) => {
        audioPlayer.src = song.audioSrc;
        document.querySelector('.song-title').textContent = song.title;
        document.querySelector('.album-cover').src = song.coverSrc;
        audioPlayer.load();
    }

    const play = () => {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    }

    const pause = () => {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }

    const previous = () => {
        if (currentSongIndex > 0) {
            currentSongIndex--;
            setSong(songs[currentSongIndex]);
            play();
        }
    }

    const next = () => {
        if (currentSongIndex < songs.length - 1) {
            currentSongIndex++;
            setSong(songs[currentSongIndex]);
            play();
        }
    }

    const toggleAutoPlay = () => {
        isAutoPlayEnabled = !isAutoPlayEnabled;
        autoPlayButton.textContent = isAutoPlayEnabled ? 'Auto On' : 'Auto Off';
    }

    const setVolume = (volume) => {
        audioPlayer.volume = volume / 100;
    }

    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            play();
        } else {
            pause();
        }
    });

    previousButton.addEventListener('click', previous);
    nextButton.addEventListener('click', next);
    autoPlayButton.addEventListener('click', toggleAutoPlay);

    volumeSlider.addEventListener('input', function() {
        setVolume(this.value);
    });

    audioPlayer.addEventListener('ended', () => {
        if (isAutoPlayEnabled) {
            next();
        }
    });

    // Inicializa con la primera canción
    setSong(songs[currentSongIndex]);
});
