<template>
    <div>
        <h1 id="title">How You Can Support</h1>
        <div id="support">
            <div id="donate">
                <div id="purple"></div>
                <button class="button">DONATE HERE</button>
            </div>
            <div id="presale">
                <div id="pink"></div>
                <button class="button">PRE-SALE HERE</button>
            </div>
            <div id="subscribe">
                <div id="orange"></div>
                <button class="button">SUBSCRIBE HERE</button>
            </div>
            <div id="follow ">
                <div id="purple"></div>
                <button class="button">FOLLOW HERE</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Jost:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

#support {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
}

#purple {
    background-color: #682138;
    width: 150px;
    height: 150px;
}

#pink {
    background-color: #ed1557;
    width: 150px;
    height: 150px;
}

#orange {
    background-color: #f47b20;
    width: 150px;
    height: 150px;
}

.button {
    border-color: #682138;
    border-width: 1px;
    background-color: #0000;
    border-style: solid;
    color: #682138;
    margin-top: 7px;
}

#title {
    font-family: 'jost', sans-serif;
    color: #682138;
}
</style>