<template>
    <div id="loop">
        <div class="start">
            <h1 id="title">Stay in the loop</h1>
            <p id="info">Be the first in the know about newsletter-exclusive content, new
                issues, and more.</p>
            <div id="line"></div>
        </div>
        <div id="buttonStyle">
            <button id="buttonStyle">SUBSCRIBE</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Jost:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
@import url(https://fonts.googleapis.com/css?family=Baskervville:regular,italic);

#buttonStyle {
    display: grid;
    justify-items: end;
    align-items: end;
    margin: 10px;
}

.start {
    display: grid;
    justify-items: start;
    text-align: start;
    margin: 20px;
}

#loop {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

#line {
    background-color: #682138;
    width: 100%;
    height: 1px;
}

#title {
    font-family: 'Jost', sans-serif;
    color: #682138;
}

#info {
    font-family: 'Baskervville', sans-serif;
    color: #682138;
}

#buttonStyle {
    color: #682138;
    border-color: #682138;
    border-width: 1px;
    background-color: #0000;
}
</style>