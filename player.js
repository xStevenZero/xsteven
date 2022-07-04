var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player("player", {
    height: "0",
    width: "0",
    videoId: "5qap5aO4i9A",

    events: {
      onReady: onPlayerReady
    }
  });
}
function onPlayerReady(event) {
  player.setVolume(50);
  event.target.playVideo(1)
}