<template>
    <div>
        <p class="color-b4b9ba f20 mt10">-{{hints}}-</p>
        <span :class="'color-b4b9ba btn-arrow '+deg"></span>
    </div>
</template>
<script>
export default {
    props: ['hints', 'deg']
}
</script>
<style scoped>
div{
    text-align: center;
}
p {
    text-align: center;
    height: .2rem;
}

span {
    display: block;
    width: .25rem;
    height: .19rem;
    margin: .1rem auto 0;
    font-size: .12rem;
    position: relative;
    background: url(../assets/icon-arrowB.png) no-repeat center;
    background-size: 100%;
}
.deg{
  transform: rotate(180deg);
}
</style>
