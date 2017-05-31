<template>
    <div>
        <p class="color-b4b9ba f20 mt10">-{{hints}}-</p>
        <span class="color-b4b9ba btn-arrow mt10">></span>
    </div>
</template>
<script>
export default {
    props: ['hints']
}
</script>
<style scoped>
p{
    text-align: center;
}
span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: .12rem;
    transform: rotate(-90deg);
}
</style>
