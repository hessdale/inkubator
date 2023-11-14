<template>
    <div>
        <div id="about">
            <div class="paragraphStylingEnd">
                <h1 class="title">We Are Inkubator</h1>
                <p class="info">At Inkubator Magazine, we are committed to
                    celebrating the voices of our local community by
                    curating and showcasing a diverse collection of short
                    stories and creative projects. As a non-profit print
                    publication, our mission goes beyond storytelling; we
                    strive to create a platform that fosters connection,
                    nurtures creativity, and empowers both emerging
                    and established writers to share their narratives</p>
                <button class="button">DONATE</button>
            </div>
            <div>
                <img src="@/assets/place_holder.png" alt="" srcset="">
            </div>
        </div>
        <div id="writers">
            <div id="purple"></div>
            <div class="paragraphStylingStart">
                <h1 class="title">Uplift Local Writers</h1>
                <p class="info">Our magazine is fuelled by the voices of our
                    community. The stories, visuals, and resources
                    that we share are a direct representation of
                    the diverse community that inspires us.</p>
                <button class="button">CHECK IT OUT</button>
            </div>
        </div>
        <div id="community">
            <div>
                <h1 class="title">Invest In Our Community</h1>
                <p class="info">As a non-profit, 100% of our proceeds are
                    invested back into our community. That
                    means we need your help in order to see our
                    vision through and build Vancouver's arts.</p>
                <button class="button">DONATE</button>
            </div>
            <div id="yellow"></div>
        </div>
        <div id="spaces">
            <div id="pink"></div>
            <div>
                <h1 class="title">Build Creative Spaces</h1>
                <p class="info">With Vancouver's vast and diverse network
                    of creatives, it is crucial to build spaces to
                    foster connections and growth. Our events,
                    and workshops aim to facilitate in
                    nurturing this growth.</p>
                <button class="button">CHECK IT OUT</button>
            </div>
        </div>
        <div id="resources">
            <div>
                <h1 class="title">Share Resources</h1>
                <p class="info">We aim to share a plethora of resources from
                    interviews with local artists to helpful guides
                    built to share helpful tidbits on every step of
                    the creative process.</p>
                <button class="button">CHECK IT OUT</button>
            </div>
            <div id="orange"></div>
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

.paragraphStylingEnd {
    display: grid;
    justify-items: end;
}

.paragraphStylingStart {
    display: grid;
    justify-items: start;
}

#about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}

#writers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
}

#community {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
}

#spaces {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
}

#resources {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
}

#purple {
    background-color: #682138;
    width: 300px;
    height: 250px;
}

#pink {
    background-color: #ed1557;
    width: 300px;
    height: 250px;
}

#orange {
    background-color: #f47b20;
    width: 300px;
    height: 250px;
}

#yellow {
    background-color: #faed18;
    width: 300px;
    height: 250px;
}

.button {
    border-color: #682138;
    border-width: 1px;
    background-color: #0000;
    border-style: solid;
    color: #682138;
    margin-top: 7px;
}

.title {
    color: #682138;
    font-style: 'Jost', sans-serif;
}

.info {
    color: #682138;
    font-style: 'Baskervvile', sans-serif;
}

#about {
    background-color: #f3e8d7;
}
</style>