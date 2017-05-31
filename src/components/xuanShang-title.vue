<template>
    <div>
        <p>
            {{xsrwTitle}}
            <router-link to="">更多》</router-link>
        </p>
    </div>
</template>
<script>
    export default{
        props:['xsrwTitle']
    }
</script>
<style scoped>
    p{
        height: .7rem;
        line-height: .7rem;
        border-bottom: 1px solid #b4b9ba;
        font-size: .3rem;
        color: #333;
        font-weight: bolder;
        padding: 0 .28rem;
        background-color: #fff;
        margin-top: .28rem;
    }
    a{
        font-size: .22rem;
        color: #848789;
        float: right;
    }
</style>
