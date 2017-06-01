<template>
    <div>
        <p class="title f30 color-333 mb30">{{gyrwTitle}}</p>
        <p class="msg color-848789 f26 mb20">{{gyrwMsg}}</p>
        <div class="f24 line">
            <span class="color-5f5f5f">募捐款项<strong><i style="width:60%;"></i></strong><em class="color-39b3ff">¥{{moneyMember}}/¥100000</em></span>
        </div>
        <p class="color-5f5f5f f24">捐赠人数：<em>{{numPeo}}</em>人</p>
    </div>
</template>
<script>
export default {
    props: ['gyrwTitle', 'gyrwMsg', 'moneyMember', 'numPeo']
}
</script>
<style scoped>
.msg {
    width: 4.73rem;
}

.line {
    position: relative;
    width: 5rem;
}

strong {
    display: block;
    width: 5rem;
    height: .05rem;
    background-color: #d8e4f0;
    margin-top: .1rem;
    margin-bottom: .1rem;
    position: relative;
    border-radius: .15rem;
}

i {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: .05rem;
    background-color: #33aaff;
    border-radius: .15rem;
    box-shadow: 0 .02rem .05rem rgba(51, 170, 255, .5);
}

.line em {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
