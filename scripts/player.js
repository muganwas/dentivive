const iContainer = document.getElementById('stream_container');
const i = document.createElement('iframe');
const m = document.createElement('span');
m.id = "mute";
i.id = "tdc";
i.src = "https://www.youtube.com/embed/C4XvJpqKJfc?enablejsapi=1&wmode=transparent&start=1&cc_lang_pref=en&disablekb=1&cc_load_policy=1&controls=0&showinfo=0&mute=1&autoplay=1";
i.title = "Natural Tooth Decay And Gum Disease Relief";
i.width = "100%";
i.height = "640";
i.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;";
i.allowFullscreen = true;

iContainer.appendChild(m);
iContainer.appendChild(i);

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('tdc', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady() { // do something fancy
}

function onPlayerStateChange() { // do something fancy
}

m.addEventListener('click', function (event) {
    event.preventDefault();
    if (player.isMuted()) {
        player.unMute();
        m.style.backgroundImage = "none";
        m.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    } else {
        const state = player.getPlayerState();
        if (state === 1) {
            player.pauseVideo();
            m.style.backgroundImage = "url('./images/continue.svg')";
            m.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        }
        if (state === 2) {
            player.playVideo();
            m.style.backgroundImage = "none";
            m.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
        }
    }

});
