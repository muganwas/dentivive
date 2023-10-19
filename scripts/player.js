const iContainer = document.getElementById('stream_container');
const i = document.createElement('iframe');
const m = document.createElement('span');
m.id = "mute";
i.id = "tdc";
i.src = "https://www.youtube.com/embed/C4XvJpqKJfc?enablejsapi=1&start=1&cc_lang_pref=en&cc_load_policy=1&controls=0&showinfo=0&mute=1&autoplay=1";
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

document.getElementById("mute").addEventListener('click', function (event) {
    if (player.isMuted()) {
        player.unMute();
    } else {
        player.mute();
    }
});
