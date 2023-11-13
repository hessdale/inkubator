<template>
    <div>
        <router-link to="/"><img src="../assets/Logos/INK_Logo_SecCream.png" alt="inkubator secondary logo"
                width="80px"></router-link>
        <div id="pages">
            <router-link class="navlink" to="/about">About Us</router-link>
            <router-link class="navlink" to="/media">Media</router-link>
            <router-link class="navlink" to="/contact">Contact</router-link>
            <router-link class="navlink" to="/privacy">Privacy Policy</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Jost:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

div {
    background-color: #682138;
    padding-top: 25px;
    margin-top: 35px;
}

.navlink {
    text-decoration: none;
    font-family: 'Jost', sans-serif;
    color: #f3e8d7;
    font-weight: 510;
    padding-left: 20px;
}

#pages {
    margin: 10px;
    padding: 20px;
}
</style>