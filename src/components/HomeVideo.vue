<template>
    <div>
        <div id="nowPlaying">
            <img @click="closeVideo()" src="../assets/undo.svg" alt="undo icon" width="40px">
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/WbfjRoQVZSw?si=IEhWxNI-s5Suvm77&amp;start=25"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <div id="videoBackground">
            <div id="videoTitle">
                <button id="watchNow" @click="playVideo()">
                    <img src="../assets/play.png" alt="play button" width="75px" height="75px">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        playVideo() {
            document.getElementById("nowPlaying").style.display = 'block';
            document.getElementById("watchNow").style.display = 'none';
            document.getElementById("videoBackground").style.display = 'none';
        },
        closeVideo() {
            document.getElementById("nowPlaying").style.display = 'none';
            document.getElementById("watchNow").style.display = 'block';
            document.getElementById("videoBackground").style.display = 'block';
        }
    },
}
</script>

<style scoped>
#triangle {
    border-style: solid;

}

#nowPlaying {
    display: none;

}

#videoTitle {
    padding-top: 130px;
    display: grid;
    justify-items: center;
    align-items: center;
}

#watchNow {
    border-radius: 50%;
    border-width: 1px;
    color: #faed18;
    border-color: #faed18;
    background-color: #0000;
    border-style: solid;
}

#videoBackground {
    text-align: center;
    background-image: url(@/assets/mountain.gif);
    background-size: cover;
    background-repeat: no-repeat;
    height: 35vh;
}

#title {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    color: #faed18;
    font-weight: 400;
    font-size: 350%;
}
</style>