const iContainer = document.getElementById('stream_container');
const i = document.createElement('iframe');
const m = document.createElement('span');
m.id = "mute";
i.src = "https://www.youtube.com/embed/C4XvJpqKJfc?start=1&autoplay=1&cc_lang_pref=en&cc_load_policy=1&controls=0&disablekb=1&fs=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0&wmode=transparent&mute=1&enablejsapi=1&origin=https%3A%2F%2Fthedentivive.com&widgetid=1";
i.title = "Natural Tooth Decay And Gum Disease Relief";
i.width = "100%";
i.height = "640";
i.frameborder = "0";
i.id = "tooth-decay-vid";
i.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;";
i.allowFullscreen = true;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('tooth-decay-vid', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    iContainer.appendChild(i);
    iContainer.appendChild(m);
}

function onPlayerReady() {
    player.playVideo();

}

function onPlayerStateChange() {
    console.log("my state changed");
}

document.getElementById("mute").addEventListener('click', function (event) {
    console.log('player ', player);

    if (player.isMuted()) {
        player.unMute();
    } else {
        player.mute();
    }
});
