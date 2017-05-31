<template>
    <div>
        <span><i class="mr10"></i>{{empVal}}</span>
        <router-link to="" :class="fontC+' f22'">{{linkName}}</router-link>
    </div>
</template>
<script>
export default {
    props: ['empVal', 'linkName', 'fontC']
}
</script>
<style scoped>
.red {
    color: #ff618f;
}

.yellow {
    color: #f7b650;
}

span {
    font-size: .22rem;
    color: #c6d3dc;
    position: relative;
    top: -0.8rem;
}

i {
    display: inline-block;
    width: .25rem;
    height: .25rem;
    background-color: red;
    border-radius: 50%;
    position: relative;
    top: .02rem;
}

a {
    display: block;
    /*width: 1.2rem;*/
    height: .48rem;
    border-radius: .30rem;
    box-shadow: 0 .05rem .15rem .02rem rgba(145, 178, 215, .3);
    line-height: .48rem;
    text-align: center;
    position: relative;
    top: .2rem
}
</style>
