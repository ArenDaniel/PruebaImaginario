var tag = document.createElement('script');
var tiempo = 10000; //Tiempo en milisegundos para deter el video y saltar el video

tag.src = "https://www.youtube.com/iframe_api"; //Link de l Api
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(pauseVideo, tiempo);
        done = true;
    }
}

function pauseVideo() {
    player.pauseVideo();
    pregunta();
}

function pregunta() {
    document.getElementById("pregunta").style.display = "flex"; //Al pusar el video se muestra la ventana emergente
}

function validar(id) { //Se valida la respuesta y se reanuda el vidoe en caso de ser postiva

    if (id == "d") {
        document.getElementById(id).style.backgroundColor = 'green';
        alert("Respuesta Correcta");
        setTimeout(() => {
            document.getElementById("pregunta").style.display = 'none'
        }, 1000);
        player.playVideo();
    } else {
        document.getElementById(id).style.backgroundColor = 'red';
        alert("Error Respuesta incorrecta")
    }
}