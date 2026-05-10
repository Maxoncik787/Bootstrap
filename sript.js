const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', () => {
    gtag('event', 'click_play_button');
    
    console.log('Button clicked');
});