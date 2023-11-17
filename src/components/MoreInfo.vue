<template>
    <div>
        <h1 id="mainTitle">Need More Info?</h1>
        <div id="contact">
            <div id="headshots">
                <div id="ellie">
                    <div id="pfp">
                    </div>
                    <span>
                        <h3 class="title">TITLE</h3>
                        <p class="name">Ellie Chung</p>
                        <a class="email" href="mailto:ellie@inkubator.com">ellie@inkubator.com</a>
                    </span>
                </div>
                <div id="maia">
                    <div id="pfp">

                    </div>
                    <span>
                        <h3 class="title">TITLE</h3>
                        <p class="name">Maia Hadfield</p>
                        <a class="email" href="mailto:maia@inkubator.com">maia@inkubator.com</a>
                    </span>
                </div>
                <div id="theo">
                    <div id="pfp">
                    </div>
                    <span>
                        <h3 class="title">TITLE</h3>
                        <p class="name">Theo Stambler</p>
                        <a class="email" href="mailto:theo@inkubator.com">theo@inkubator.com</a>
                    </span>
                </div>
            </div>
            <div id="info">
                <div>
                    <h3 class="title">GENERAL INQUIRIES</h3>
                    <a class="email" href="mailto:info@inkubator.com">info@inkubator.com</a>
                </div>
                <div>
                    <h3 class="title">SUBMISSIONS</h3>
                    <a class="email" href="mailto:artists@inkubator.com">artists@inkubator.com</a>
                </div>
                <div>
                    <h3 class="title">PRESS</h3>
                    <a class="email" href="mailto:press@inkubator.com">press@inkubator.com</a>
                </div>
                <div>
                    <h3 class="title">MAILING</h3>
                    <p class="name">936 Clark Drive <br>
                        Vancouver, BC <br>
                        V5L 3J8</p>
                </div>
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
@import url(https://fonts.googleapis.com/css?family=Baskervville:regular,italic);


#mainTitle {
    color: #682138;
    font-family: 'Jost', sans-serif;
    font-weight: 500;
}

.email {
    text-decoration: none;
    color: #682138;
    font-family: 'Baskervville', sans-serif;
}

.name {
    font-family: 'Baskervville', sans-serif;
    color: #682138;
}

.title {
    font-weight: 450;
    color: #682138;
}

#pfp {
    background-color: #682138;
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

#contact {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 20px;
}

#ellie {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

#maia {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

#theo {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>