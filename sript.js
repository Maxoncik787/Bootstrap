const btn = document.querySelector('.btn-primary');
btn.addEventListener('click', () => {
    gtag('event', 'order_button_clicked');
    console.log('дани видправлено!');
});