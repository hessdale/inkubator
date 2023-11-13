<template>
    <div><span id="header">
            <span id="logo">
                <img src="../assets/Logos/INK_Logo_MainMaroon.png" alt="inkubator maroon logo" width="150px">
            </span>
            <span id="nav">
                <router-link class="navlink" to="/read">Read</router-link>
                <router-link class="navlink" to="/learn">Learn</router-link>
                <router-link class="navlink" to="/events">Events</router-link>
                <router-link class="navlink" to="/about">About</router-link>
                <router-link class="navlink" to="/donate">Donate</router-link>
            </span></span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Jost:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

#logo {
    display: grid;
    justify-content: start;
    margin: 10px;
    margin-top: 10px;
}

#header {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

#nav {
    align-items: center;
    margin: 20px;
}

.navlink {
    text-decoration: none;
    font-family: 'Jost', sans-serif;
    color: #682138;
    font-weight: 510;
    padding-left: 20px;
}
</style>