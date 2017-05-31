<template>
    <div>
        <div class="wrap-box bgc-fff">
            <p :class="'tit '+bgc">{{title}}</p>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'bgc']
}
</script>
<style scoped>
.wrap-box {
    margin-top: .32rem;
    position: relative;
}

.wrap-box > p {
    color: #fff;
}

.tit {
    position: absolute;
    width: 1.29rem;
    height: .42rem;
    top: 0;
    left: 0;
    font-size: .22rem;
    text-align: center;
    line-height: .42rem;
}

.bgc01 {
    background-color: #f27365;
}

.bgc02 {
    background-color: #7fd128;
}

.bgc03 {
    background-color: #34abff;
}
</style>
