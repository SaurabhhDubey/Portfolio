
var typed = new Typed('#element', {
    strings: ['Web Devloper', 'Graphic Designor', 'Video Editor'],
    typeSpeed: 50,
});
const btn = document.getElementById('btnn');
btn.addEventListener('click', function(){
    const url = 'https://drive.google.com/file/d/10GZ8XyXiHv6huiST6eh4CqYxmvKk-KGA/view?usp=drivesdk';
    window.open(url,'');
});


