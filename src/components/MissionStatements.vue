<template>
    <div>
        <div id="started">
            <div class="paragraphStart">
                <h1 class="title">How It Started</h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati consequatur
                    harum
                    et cum. Ab,
                    itaque atque! Fugit voluptate voluptates repellat nobis veritatis aliquam excepturi, quidem corrupti
                    saepe,
                    minima vitae?</p>
            </div>
            <div class="block"></div>
        </div>
        <div id="now">
            <div class="block"></div>
            <div class="paragraphEnd">
                <h1 class="title">Where It Is Now</h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, error fugiat aliquid nam
                    reprehenderit,
                    distinctio perferendis neque nulla voluptatum nobis, hic aperiam ducimus amet est inventore itaque
                    beatae
                    doloribus? Quae?</p>
            </div>

        </div>
        <div id="become">
            <div class="paragraphStart">
                <h1 class="title">What It Will Become</h1>
                <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, fugit. Quaerat impedit
                    eveniet
                    dolorum,
                    quidem repellat praesentium placeat veritatis nulla optio soluta maiores doloremque aspernatur tempore
                    suscipit nihil ratione. Error.</p>
            </div>
            <div class="block"></div>
        </div>
        <div id="why">
            <h1 class="title" id="beigeTitle">Why We Need You</h1>
            <p class="info" id="beigeInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deleniti rem
                reiciendis eligendi
                veniam, nulla ullam ducimus! Iusto quas veritatis suscipit magni consequatur, nostrum eius asperiores rerum,
                recusandae quod iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti, hic molestiae
                sequi eaque eos quisquam, quo suscipit commodi fuga, ab rem. Dignissimos mollitia velit ipsa suscipit rem
                neque ex.</p>
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

.paragraphEnd {
    display: grid;
    justify-items: end;
    margin: 20px;
    text-align: end;
}

.paragraphStart {
    display: grid;
    justify-items: start;
    margin: 20px;
    text-align: start;
}

#beigeTitle {
    color: #f3e8d7;
}

#beigeInfo {
    color: #f3e8d7;
}

#started {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
}

#now {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
}

#become {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
}

#why {
    padding: 10px;
    padding-left: 70px;
    padding-right: 70px;
    background-color: #682138;
}

.info {
    font-family: 'Baskervville', sans-serif;
    color: #682138;
}

.title {
    font-family: 'Jost', sans-serif;
    font-weight: 500;
    color: #682138;
}

.block {
    background-color: #ed1557;
    width: 200px;
    height: 200px;
}
</style>