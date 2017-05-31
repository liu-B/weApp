<template>
    <div>
        <router-link to="" :class="gd"><i></i>股东</router-link>
        <router-link to="" :class="gy"><i></i>公益</router-link>
        <router-link to="" :class="hb"><i></i>互帮</router-link>
        <router-link to="" :class="tq"><i></i>特权</router-link>
    </div>
</template>
<script>
export default {
    props: ['gd', 'gy', 'hb', 'tq']
}
</script>
<style scoped>
div {
    height: .67rem;
    padding: .15rem 0;
    background-color: #fff;
    box-shadow: -.02rem 0 .5rem .01rem rgba(51, 170, 255, .5);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
}

a {
    font-size: .2rem;
    color: #b4b9ba;
    display: block;
    width: 25%;
    float: left;
    text-align: center;
}

i {
    display: block;
    width: .34rem;
    height: .45rem;
    background-color: #eee;
    border-radius: .5rem;
    margin: 0 auto .08rem;
}

.nac-active {
    color: #35acff;
}
.nac-active i{
  background-color: #35acff;
}
</style>
