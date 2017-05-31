<template>
    <div>
        <span><i class="mr10"></i>{{empVal}}</span>
    </div>
</template>
<script>
export default {
    props: ['empVal']
}
</script>
<style scoped>
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
    background: url(../assets/icon-money.png) no-repeat;
    background-size: 100%;
    position: relative;
    top: .02rem;
}
</style>
