<template>
    <div>
        <router-link to="" :class="fontC+' f22'">{{linkName}}</router-link>
    </div>
</template>
<script>
export default {
    props: ['linkName', 'fontC']
}
</script>
<style scoped>
.red {
    color: #ff618f;
}

.yellow {
    color: #f7b650;
}

.blue {
    color: #39b3ff;
}

a {
    display: block;
    width: 1.2rem;
    height: .48rem;
    border-radius: .30rem;
    box-shadow: 0 .05rem .15rem .02rem rgba(145, 178, 215, .3);
    line-height: .48rem;
    text-align: center;
    /*position: relative;*/
    /*top: .2rem*/
}
</style>
