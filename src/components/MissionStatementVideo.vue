<template>
    <div>
        <div id="nowPlaying">
            <!-- <video width="320" height="240" controls>
                <source src="../assets/mountain.mp4" type="video/mp4">
            </video> -->
        </div>
        <div id="video">
            <div id="videoTitle">
                <h1 id="title">Our Mission</h1>
                <button id="watchNow" @click="playVideo">WATCH THE FULL VIDEO</button>
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
#NowPlaying {
    display: none;

}

#videoTitle {
    padding-top: 10%;
}

#watchNow {
    border-width: 1px;
    color: #faed18;
    border-color: #faed18;
    background-color: #0000;
}

#video {
    text-align: center;
    background-image: url(@/assets/mountain.gif);
    background-size: contain;
    background-repeat: no-repeat;
    height: 700px;
}

#title {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    color: #faed18;
    font-weight: 400;
    font-size: 350%;
}
</style>