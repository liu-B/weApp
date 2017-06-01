<template>
    <div class="list-box pt60 clearfix">
        <div class="list-l">
            <p class="fl f28 mt20">{{text}}</p>
        </div>
        <div class="list-r fr">
            <!-- <img :src="imgAddr" alt=""> -->
            <slot></slot>
        </div>
        <small class="f20 color-a6a8ab">{{date}}</small>
    </div>
</template>
<script>
export default {
    props: ['text', 'imgAddr', 'date']
}
</script>
<style scoped>
.list-box {
    position: relative;
    border-bottom: 1px solid #eee;
    padding-bottom: .3rem;
}

p {
    width: 4.77rem;
    line-height: .4rem;
    color: #525252;
}

.list-r {
    display: inline-block;
    width: 1.77rem;
    height: 1.77rem;
    background-color: #ccc;
}

small {
    top: .15rem;
    right: 0;
    position: absolute;
}
</style>
