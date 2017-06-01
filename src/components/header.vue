<template>
    <div>
        <h1 class="color-fff f38">{{headTitle}}</h1>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['headTitle']
}
</script>
<style scoped>
div {
    width: 100%;
    height: .87rem;
    background: url(../assets/index-header-bg.jpg) no-repeat center center;
    -webkit-background-size: cover;
    background-size: cover;
    text-align: center;
    font-size: .38rem;
    line-height: .87rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
}

h1 {
    display: inline-block;
}
</style>
