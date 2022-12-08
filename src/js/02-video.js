import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timePlayer = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(Number(timePlayer));

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 500));

