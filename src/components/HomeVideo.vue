<template>
    <div>
        <div id="nowPlaying">
            <!-- <video width="320" height="240" controls>
                <source src="../assets/mountain.mp4" type="video/mp4">
            </video> -->
        </div>
        <div id="videoBackground">
            <div id="videoTitle">
                <button id="watchNow" @click="playVideo">
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

        }
    },
}
</script>

<style scoped>
#triangle {
    border-style: solid;

}

#NowPlaying {
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